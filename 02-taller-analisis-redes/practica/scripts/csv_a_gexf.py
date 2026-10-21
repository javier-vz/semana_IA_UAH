#!/usr/bin/env python3
"""Convierte una tabla simple de nodos/aristas a GEXF 1.2 para Gephi Lite.

Biblioteca estándar únicamente. Dataset demostrativo; no requiere cuenta ni API.
"""
from __future__ import annotations

import argparse
import csv
from pathlib import Path
import xml.etree.ElementTree as ET

NS = "http://www.gexf.net/1.2draft"
ET.register_namespace("", NS)


def tag(local: str) -> str:
    return f"{{{NS}}}{local}"


def read_rows(path: Path, expected: set[str]) -> list[dict[str, str]]:
    with path.open("r", encoding="utf-8-sig", newline="") as fh:
        reader = csv.DictReader(fh)
        actual = set(reader.fieldnames or [])
        missing = expected - actual
        if missing:
            raise ValueError(f"Faltan columnas en {path}: {', '.join(sorted(missing))}")
        return list(reader)


def make_gexf(nodes_path: Path, edges_path: Path, output_path: Path) -> None:
    nodes = read_rows(nodes_path, {"id", "label"})
    edges = read_rows(edges_path, {"source", "target"})
    ids = [n["id"].strip() for n in nodes]
    if not ids or len(ids) != len(set(ids)) or any(not i for i in ids):
        raise ValueError("Los nodos deben tener identificadores únicos y no vacíos")
    all_ids = set(ids)

    root = ET.Element(tag("gexf"), {"version": "1.2"})
    graph = ET.SubElement(root, tag("graph"), {"mode": "static", "defaultedgetype": "undirected"})
    attrs = ET.SubElement(graph, tag("attributes"), {"class": "node"})
    ET.SubElement(attrs, tag("attribute"), {"id": "grupo", "title": "grupo", "type": "string"})
    xmlnodes = ET.SubElement(graph, tag("nodes"))
    for node in nodes:
        n = ET.SubElement(xmlnodes, tag("node"), {"id": node["id"].strip(), "label": node["label"].strip()})
        if node.get("grupo", "").strip():
            values = ET.SubElement(n, tag("attvalues"))
            ET.SubElement(values, tag("attvalue"), {"for": "grupo", "value": node["grupo"].strip()})

    xmledges = ET.SubElement(graph, tag("edges"))
    for index, edge in enumerate(edges):
        source, target = edge["source"].strip(), edge["target"].strip()
        if source not in all_ids or target not in all_ids:
            raise ValueError(f"Arista {index + 1}: origen o destino ausente en la tabla de nodos")
        weight = float(edge.get("peso") or 1)
        attrs = {"id": str(index), "source": source, "target": target, "weight": str(weight)}
        if edge.get("tipo", "").strip():
            attrs["label"] = edge["tipo"].strip()
        ET.SubElement(xmledges, tag("edge"), attrs)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    tree = ET.ElementTree(root)
    ET.indent(tree, space="  ")
    tree.write(output_path, encoding="utf-8", xml_declaration=True)
    print(f"GEXF generado: {output_path} ({len(nodes)} nodos, {len(edges)} aristas)")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--nodos", type=Path, required=True)
    parser.add_argument("--aristas", type=Path, required=True)
    parser.add_argument("--salida", type=Path, required=True)
    args = parser.parse_args()
    make_gexf(args.nodos, args.aristas, args.salida)


if __name__ == "__main__":
    main()
