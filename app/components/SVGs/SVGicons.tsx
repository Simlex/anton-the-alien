import React from 'react';

export function HamburgerIcon({ width, height, active }: { width?: number, height?: number, active?: boolean }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 8H27M5 16H27M5 24H27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
};

export function TwitterIcon({ width, height, active }: { width?: number, height?: number, active?: boolean }) {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_14_464)">
                <path d="M19.401 1.15356H23.081L15.041 10.3436L24.5 22.8466H17.094L11.294 15.2626L4.656 22.8466H0.974L9.574 13.0166L0.5 1.15456H8.094L13.337 8.08657L19.401 1.15356ZM18.11 20.6446H20.149L6.986 3.24056H4.798L18.11 20.6446Z" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_14_464">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
};

export function LinktreeIcon({ width, height, active }: { width?: number, height?: number, active?: boolean }) {
    return (
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83325 13.3334H27.1666M9.16659 6.00008L23.8333 20.6667M9.16659 20.6667L23.8333 6.00008M16.4999 13.3334V2.66675M16.4999 20.0001V29.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
};

export function TelegramIcon({ width, height, active }: { width?: number, height?: number, active?: boolean }) {
    return (
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_14_460)">
                <path d="M16.5 0C12.2575 0 8.185 1.68675 5.1875 4.68625C2.18691 7.68694 0.500831 11.7565 0.5 16C0.5 20.2417 2.1875 24.3142 5.1875 27.3137C8.185 30.3132 12.2575 32 16.5 32C20.7425 32 24.815 30.3132 27.8125 27.3137C30.8125 24.3142 32.5 20.2417 32.5 16C32.5 11.7583 30.8125 7.68575 27.8125 4.68625C24.815 1.68675 20.7425 0 16.5 0Z" fill="url(#paint0_linear_14_460)" />
                <path d="M7.74262 15.8311C12.4076 13.7991 15.5176 12.4593 17.0726 11.8121C21.5176 9.96381 22.4401 9.64281 23.0426 9.63193C23.1751 9.62981 23.4701 9.66256 23.6626 9.81818C23.8226 9.94943 23.8676 10.1269 23.8901 10.2516C23.9101 10.3761 23.9376 10.6598 23.9151 10.8813C23.6751 13.4113 22.6326 19.5508 22.1026 22.3846C21.8801 23.5836 21.4376 23.9856 21.0101 24.0248C20.0801 24.1103 19.3751 23.4108 18.4751 22.8211C17.0676 21.8978 16.2726 21.3233 14.9051 20.4226C13.3251 19.3816 14.3501 18.8093 15.2501 17.8743C15.4851 17.6296 19.5801 13.9058 19.6576 13.5681C19.6676 13.5258 19.6776 13.3683 19.5826 13.2853C19.4901 13.2021 19.3526 13.2306 19.2526 13.2531C19.1101 13.2851 16.8626 14.7721 12.5026 17.7138C11.8651 18.1523 11.2876 18.3661 10.7676 18.3548C10.1976 18.3426 9.09762 18.0318 8.28012 17.7663C7.28012 17.4406 6.48262 17.2683 6.55262 16.7151C6.58762 16.4271 6.98512 16.1323 7.74262 15.8311Z" fill="white" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_14_460" x1="1600.5" y1="0" x2="1600.5" y2="3200" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2AABEE" />
                    <stop offset="1" stop-color="#229ED9" />
                </linearGradient>
                <clipPath id="clip0_14_460">
                    <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
};