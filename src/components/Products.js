import motherboard from '../images/productos/motherboard.jpg'
import fuente from '../images/productos/fuente.jpg'
import gabinete from '../images/productos/gabinete.jpg'
import placavideo from '../images/productos/placavideo.jpg'
import procesador from '../images/productos/procesador.jpg'
import ram from '../images/productos/ram.jpg'
import teclado from '../images/productos/teclado.jpg'

const Products = 
        [
            {
                id: 1,
                nombre: "Mother Board", 
                precio: 15000, 
                descripcion: "Mother board as2560",
                categoria: "computacion",
                imagen : motherboard
            },
            {
                id: 2,
                nombre: "Placa de video", 
                precio: 18000, 
                descripcion: "Chipset: NVIDIA GeForce GT 710; Maximum displays: 2 Video memory: 2gb DDR3/memory clock: 1600 MHz/memory interface: 64 bit",
                categoria: "computacion",
                imagen : placavideo
            },
            {
                id: 3,
                nombre: "Teclado y mouse", 
                precio: 10000, 
                descripcion: "【Gaming Keyboard Mouse Combo】The gaming keyboard is made of aluminum alloy brushed panel",
                categoria: "computacion",
                imagen : teclado
            },
            {
                id: 4,
                nombre: "Fuente", 
                precio: 9000, 
                descripcion: "El sistema de control térmico inteligente EVGA ECO elimina el ruido del ventilador a cargas bajas a medias",
                categoria: "computacion",
                imagen : fuente
            },
            {
                id: 5,
                nombre: "Gabinete", 
                precio: 12000, 
                descripcion: "✔ 3 ventiladores de anillo RGB para un máximo flujo de aire | Alimentado por fuente de alimentación certificada 80 Plus Gold de 600 W",
                categoria: "computacion",
                imagen : gabinete
            },
            {
                id: 6,
                nombre: "Procesador", 
                precio: 80000, 
                descripcion: "Compatible con Intel 500 Series y Select Intel 400 Series chipset basado en placas base",
                categoria: "computacion",
                imagen : procesador
            },
            {
                id: 7,
                nombre: "Mother Board3", 
                precio: 15000, 
                descripcion: "Mother board as2560",
                categoria: "computacion",
                imagen : motherboard
            },
            {
                id: 8,
                nombre: "Placa RAM", 
                precio: 8500, 
                descripcion: "Perfiles certificados Intel XMP optimizados para los últimos chipsets de Intel",
                categoria: "computacion",
                imagen : ram
            },
        ];

export default Products