// Importamos el cliente de Prisma
import { PrismaClient } from "@prisma/client";

// Definimos una función para crear una instancia de PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Guardamos la referencia global para Prisma en una variable
const globalForPrisma = globalThis;

// Si ya existe una instancia global de Prisma, la reutilizamos; si no, creamos una nueva
const prisma = globalForPrisma.prismaGlobal ?? prismaClientSingleton();

export default prisma;

/* Si no estamos en un entorno de producción, guardamos la instancia de Prisma en la variable global para
evitar crear múltiples instancias debido a reinicios frecuentes en el servidor de desarrollo. 
En producción, esto no es necesario ya que el servidor se ejecuta una única vez. */
if (process.env.NODE_ENV !== "production")
  globalForPrisma.prismaGlobal = prisma;
