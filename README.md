# ClinicaDentalApp-

# README - Aplicación Móvil Dental Crown

## 1. Descripción del Proyecto

El proyecto consiste en desarrollar una aplicación móvil para la gestión de citas en la clínica dental 'Dental Crown', con una interfaz intuitiva y un método de pago con Stripe.

### Objetivo:
Desarrollar una aplicación móvil para la gestión de citas en la clínica dental 'Dental Crown', con una interfaz intuitiva y un método de pago con Stripe.

### Alcance:
El equipo está compuesto por dos personas:

- **Cruz Luna Arlette**
- **Meyer Medina Carlos Ezequiel**

Ambos somos desarrolladores, cumpliendo múltiples roles como planificación, desarrollo y pruebas debido a la metodología XP adoptada.

### Riesgos y Medidas
- **Riesgos**: Problemas de seguridad en el pago con Stripe, fallos de sincronización con la base de datos y retrasos en la implementación.
- **Medidas**: Integración continua de pruebas con Postman, revisiones regulares del código en GitHub y evaluación continua de seguridad en Stripe.

Se realizarán reuniones diarias de seguimiento para discutir el progreso de cada desarrollador, identificar bloqueos y coordinar tareas futuras. Trello permite también utilizar Slack para la comunicación en tiempo real y Trello para la asignación y seguimiento de tareas.

### Metodología:
**XP (Extreme Programming)** es la metodología elegida, ya que permite iteraciones rápidas, retroalimentación constante y la capacidad de adaptar rápidamente cambios.

## 2. Herramienta de Planeación

Toda la información relacionada con los objetivos, alcance, riesgos, metodología y roles del equipo se encuentra en el apartado "Aspectos clave".

En Trello se organizará el proyecto en tableros divididos en:
- **Backlog**: Listado de tareas pendientes que aún no se han comenzado.
- **In Progress**: Tareas que están siendo trabajadas actualmente.
- **Review**: Tareas que están en proceso de ser revisadas por los desarrolladores o el tester.
- **Done**: Tareas completadas que han pasado por la revisión y están listas.

Cada tarjeta en Trello incluirá:
- Descripción detallada de la tarea o issue.
- Responsable de la tarea.
- Prioridad (alta, media, baja).
- Fecha límite de entrega.

## 3. Herramienta de Control de Versiones

El control de versiones se realiza a través de **Git** y se gestiona en **GitHub**.

### Flujo de Trabajo:
1. Cada desarrollador trabaja en una rama específica basada en la tarea que tiene asignada.
2. Se utilizan pull requests para solicitar la integración de cambios a la rama principal.
3. El código pasa por una revisión de pares antes de ser fusionado.
4. Se realizan commits regulares con mensajes claros y descriptivos.

## 4. Estrategia de Versionamiento y Gestión de Ramas

La estrategia de versionamiento sigue el esquema **SemVer** (Versionado Semántico):
- **MAJOR**: Para cambios que rompen la compatibilidad.
- **MINOR**: Para nuevas funcionalidades que no rompen compatibilidad.
- **PATCH**: Para correcciones de errores y mejoras menores.

### Gestión de Ramas:
- **Main**: Rama principal estable.
- **servicios-Apis**: Rama para trabajar con las APIs requeridas.
- **Navegación-App**: Rama para la navegación, gestión y control de rutas de navegación.
- **Pago-Stripe**: Rama para montar el método de pago de Stripe.

## 5. Estrategia de Despliegue y CI/CD

La estrategia de despliegue utiliza **Expo** para pruebas y despliegues rápidos de la aplicación móvil.

### Entornos:
- **Desarrollo**: Utilizado para realizar pruebas locales.
- **Producción**: El entorno donde la aplicación se desplegará a los usuarios finales.

### Proceso CI/CD:
1. **CI (Integración Continua)**: Las pruebas automáticas se ejecutan cada vez que hay un pull request.
2. **CD (Despliegue Continuo)**: Una vez aprobados los cambios, la aplicación se despliega automáticamente en Expo.

## 6. Instrucciones de Uso

### Clonar el Repositorio:
```bash
git clone https://github.com/CarlosMeyer400400/ClinicaDentalApp-
cd ClinicaDentalApp-

Instalar Dependencias:
npm install

Ejecutar la Aplicación:
npx expo start



