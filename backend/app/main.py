from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #Permitir que aplicaciones externas entren y visualicen la información
from routes import router #Importamos las rutas que definimos en routes.py

app = FastAPI() #Creamos la app principal

#Creamos el filtro de seguridad
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todas las aplicaciones externas
    allow_credentials=True, #Permitimos que se envíen credenciales
    allow_methods=["*"],  # Permitir todos los métodos HTTP
    allow_headers=["*"],  # Permitir todos los encabezados
)

app.include_router(router) #Incluimos las rutas que definimos en routes.py
