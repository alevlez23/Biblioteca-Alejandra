Blog Alejandra Biblioteca UI Profesional

Proyecto Académico 2025 – CSS Avanzado + React + Vite

Por: Alejandra Velez
Año: 2025

Descripción:
Blog Alejandra documenta la Biblioteca UI Profesional, una colección de componentes de interfaz de usuario construidos con CSS avanzado (variables, glassmorphism, flexbox, grid, animaciones y media queries). Los componentes están diseñados para ser reutilizables, accesibles y fáciles de integrar en proyectos reales.

Esta documentación incluye la descripción, ejemplos visuales y fragmentos de código de cada componente de la biblioteca. Todo está pensado para que puedas integrar los elementos de manera modular y coherente en cualquier proyecto web esta basada en tonalidades azul neón, ofreciendo una estética moderna y adaptable a diversos entornos web.

Todos los componentes han sido implementados, organizados, documentados y presentados en una demo funcional diseñada con React + Vite.

Sistema de Diseño

Variables CSS usadas para todo el tema

:root {
    --primary: #00eaff;
    --primary-soft: rgba(0, 234, 255, 0.25);
    --dark: #020814;
    --glass: rgba(255, 255, 255, 0.04);
    --text: #d9eaff;
    --white: #fff;
    --radius: 18px;
}

CONVENCIÓN DE NOMBRES BEM

El proyecto utiliza la metodología BEM (Block — Element — Modifier) para garantizar escalabilidad, claridad y mantenibilidad del CSS.

    export default function Button() {
  return (
    <div className="button-card">
      <h3 className="button-card__title">
        <i className="bi bi-lightning-charge-fill"></i> Botones
      </h3>

      <button className="button button--primary">Primario</button>
      <button className="button button--outline">Secundario</button>
      <button className="button button--disabled" disabled>
        Deshabilitado
      </button>
    </div>
  );
}

USO DE SOMBRAS SUAVES, EFECTOS NEÓN Y ANIMAcIONES

    * Animación float

    * Efecto glowPulse

    * Sombras basadas en el color primario

    * Fondo estilo glass / blur

COMPONENTES UI DESARROLLADOS

Cada componente está diseñado para ser reutilizable, accesible y consistente.

![alt text](<Imagen 1.png>)

    * Botones (UI Buttons) – primarios, outline, disabled

    * Tarjetas (UI Cards)

    * Modal

    * Badges

    * Tooltips

    * Inputs estilizados

    * Tabs

    * Accordion

    * Alert Box

    * Iconografía con animaciones interactivas

ARQUITECTURA DEL PROYECTO

![alt text](<Imagen 2.png>)

INSTALACIÓN Y EJECUCIÓN DEL PROYECTO

    * npm install

Ejecutar en entorno de desarrollo

Para verlo desde el celular u otro dispositivo

    * npm run dev

![alt text](<Imagen 3.png>) 

Esto permite acceder desde dispositivos conectados a tu misma red local (Celulares).

    * vite --host


![alt text](<Imagen 4.jpeg>)

DEMO Y VISUALIZACIÓN

El proyecto incluye una demo navegable donde se puede visualizar cada componente con ejemplos, estados y variaciones.

Autora:

    ALEJANDRA VELEZ
    Proyecto académico — Unidad (Actividad #5)
    Carrera: Tecnología de la Información
    Universidad Técnica de Manabí

Este README cumple con:

![alt text](<Imagen 5.png>) ![alt text](<Imagen 6.png>) ![alt text](<Imagen 7.png>)

    * Descripción clara del proyecto

    * Guía de estilos 

    * Variables CSS

    * BEM

    * Componentes incluidos

    * Arquitectura

    * Instrucciones de ejecución

    * Presentación académica y profesional


