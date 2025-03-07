#!/bin/bash

echo "Exportando datos de MongoDB..."

# Exportar sensores
mongoexport --db sensores --collection sensors --out ./sensors_back.json --jsonArray
echo "Backup de sensores guardado en resources/sensors_back.json"

# Exportar lecturas
mongoexport --db sensores --collection readings --out ./readings_back.json --jsonArray
echo "Backup de lecturas guardado en resources/readings_back.json"



# Pausa antes de cerrar el terminal
read -p "Proceso terminado. Presiona Enter para salir..."
