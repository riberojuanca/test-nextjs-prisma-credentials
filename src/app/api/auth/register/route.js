// Importamos NextResponse para manejar las respuestas en el servidor
import { NextResponse } from "next/server";
// Importamos la instancia de Prisma desde el archivo de conexión
import db from "@/libs/db.js";

// Función que maneja las solicitudes POST para registrar un nuevo usuario
export async function POST(request) {
  // Parseamos el cuerpo de la solicitud en formato JSON
  const data = await request.json();

  // Buscamos si ya existe un usuario con el mismo email
  const emailFound = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  // Si ya existe un usuario con ese email, retornamos una respuesta con un error 400
  if (emailFound) {
    return NextResponse.json(
      {
        messsage: "Email already exists", // Mensaje de error para email duplicado
      },
      {
        status: 400, // Código de estado HTTP para solicitud incorrecta
      }
    );
  }

  // Buscamos si ya existe un usuario con el mismo nombre de usuario (username)
  const usernameFound = await db.user.findUnique({
    where: {
      username: data.username,
    },
  });

  // Si ya existe un usuario con ese username, retornamos una respuesta con un error 400
  if (usernameFound) {
    return NextResponse.json(
      {
        messsage: "Username already exists", // Mensaje de error para username duplicado
      },
      {
        status: 400, // Código de estado HTTP para solicitud incorrecta
      }
    );
  }

  // Creamos un nuevo usuario en la base de datos con los datos proporcionados
  const newUser = await db.user.create({ data });

  // Retornamos la respuesta con los datos del nuevo usuario creado en formato JSON
  return NextResponse.json(newUser);
}
