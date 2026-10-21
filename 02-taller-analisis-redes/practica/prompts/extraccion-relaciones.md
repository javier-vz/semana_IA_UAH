# Prompt orientativo · Extraer relaciones desde un texto

Este ejemplo está pensado para copiarse en un asistente de IA **junto con un fragmento cuya licencia o autorización permita su uso**.

```text
Actúa como asistente de codificación para un ejercicio de análisis de redes.
Trabaja exclusivamente con el fragmento proporcionado. No uses conocimiento
externo de la obra ni completes relaciones por intuición.

Tarea:
1. Identifica las personas o personajes que aparecen de manera explícita.
2. Registra variantes de nombre y anota las dudas de identidad.
3. Identifica interacciones explícitas entre dos personajes, si las hay.
4. Devuelve una tabla CSV con columnas:
   origen,destino,tipo_relacion,evidencia_textual,observaciones
5. Incluye una fila solo si puedes señalar una evidencia textual concreta.
6. Si la relación es ambigua, señálala en observaciones y no la des por confirmada.
7. No inventes personajes, escenas, diálogos ni vínculos.

Fragmento:
[PEGAR AQUÍ EL FRAGMENTO]
```

## Revisión necesaria

- ¿Cada personaje se identifica de forma consistente?
- ¿La evidencia existe en el texto y corresponde al vínculo?
- ¿El vínculo corresponde a interacción, mención o coaparición?
- ¿La dirección de una relación importa o el vínculo debe ser no dirigido?
- ¿Qué casos quedan ambiguos o requieren revisión manual?

El objetivo de la actividad es aprender a **evaluar la salida de IA**, no aceptarla automáticamente como dato.
