from fastapi import APIRouter #Sistema de Rutas
from data import nombres #Importamos la lista de nombres

router = APIRouter() #Creamos un objeto para poder definir las rutas

@router.get("/nombres") #Definimos la ruta /nombres
def get_nombres(): #Función para obtener los nombres
    return nombres #Retornamos la lista de nombres

#Sirve como buena practica para seccionar bien las rutas y asi no amontonar todo en el main