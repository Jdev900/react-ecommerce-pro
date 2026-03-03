🔗 Demo en vivo: [[LINK_DE_VERCEL_AQUÍ]](https://react-ecommerce-pro.vercel.app/)

# 🚀 DevStore - Modern E-Commerce UI

Una experiencia de compra fluida, rápida y moderna construida con **React**, **TypeScript** y **Tailwind CSS**. Este proyecto demuestra el manejo de estados globales complejos, persistencia de datos y una interfaz de usuario altamente interactiva.
---

## ✨ Características Principales

* **🛒 Carrito de Compras Completo:** Añadir, eliminar, ajustar cantidades y vaciado total con cálculos de precio en tiempo real.
* **🔍 Buscador Inteligente:** Filtrado dinámico de productos por nombre mientras escribes.
* **📂 Filtros por Categoría:** Clasificación instantánea de productos (Electrónica, Accesorios, Muebles).
* **💾 Persistencia de Datos:** El carrito se mantiene guardado incluso si recargas la página (utilizando `localStorage` vía Zustand).
* **📱 Diseño Responsive:** Optimizado para dispositivos móviles, tablets y escritorio.
* **🔔 Feedback Visual:** Notificaciones elegantes con `react-hot-toast` para cada acción del usuario.

## 🛠️ Stack Tecnológico

* **Frontend:** React 18 con Vite.
* **Lenguaje:** TypeScript para un código robusto y tipado.
* **Estilos:** Tailwind CSS (Utilizando animaciones y estados de hover avanzados).
* **Gestión de Estado:** Zustand (Arquitectura centralizada y ligera).
* **Iconos:** Lucide-React.

## 🚀 Instalación y Uso

1.  Clona este repositorio:
    ```bash
    git clone [https://github.com/TU_USUARIO/tu-repositorio.git](https://github.com/TU_USUARIO/tu-repositorio.git)
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Inicia el modo desarrollo:
    ```bash
    npm run dev
    ```

## 🧠 Desafíos Técnicos Superados

* **Manejo de Inventario:** Implementación de lógica para que el botón de restar cantidad se bloquee al llegar a 1, forzando el uso del botón de eliminar para quitar el producto.
* **Arquitectura Limpia:** Separación estricta entre componentes de UI, lógica de negocio (store) y tipos de datos.
* **Performance:** Uso de métodos de array eficientes (`filter`, `reduce`) para el manejo del estado del carrito sin re-renders innecesarios.

---

Desarrollado por **José Rodríguez**
