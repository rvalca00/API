
#!/bin/bash

echo "Restaurar la base de datos de mongodb"

# Importar los sensores (elimina la colección antes con --drop)
mongoimport --db sensores --collection sensors --drop --file ./sensors.json --jsonArray
echo "Sensores importados correctamente."

# Importar las lecturas (elimina la colección antes con --drop)
mongoimport --db sensores --collection readings --drop --file ./readings.json --jsonArray
echo "Lecturas importadas correctamente."
read -p "Proceso terminado. Presiona Enter para salir..."