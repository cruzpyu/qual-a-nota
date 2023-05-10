export const notes = [
  {
    name: "ré2",
    file: "ré",
    alt: "A seta aponta para o espaço antes do primeiro dedo",
  },
  { name: "mi", file: "mi", alt: "A seta aponta para o primeiro dedo" },
  {
    name: "fá",
    file: "fá",
    alt: "A seta aponta para o espaço entre o primeiro e o segundo dedo",
  },
  { name: "sol", file: "sol", alt: "A seta aponta para o segundo dedo" },
  {
    name: "lá",
    file: "lá",
    alt: "A seta aponta para o espaço entre o segundo e o terceiro dedo",
  },
  { name: "si", file: "si", alt: "A seta aponta para o terceiro dedo" },
  {
    name: "dó",
    file: "dó",
    alt: "A seta aponta para o espaço entre o terceiro e o quarto dedo",
  },
  { name: "ré", file: "ré", alt: "A seta aponta para o quarto dedo" },

  {
    name: "mi2",
    file: "mi",
    alt: "A seta aponta para o espaço entre o quarto e o quinto dedo",
  },
  {
    name: "fá2",
    file: "fá",
    alt: "A seta aponta para o quinto dedo",
  },
  {
    name: "sol2",
    file: "sol",
    alt: "A seta aponta para o espaço depois do quinto dedo",
  },
];
export const shakeAnimation = {
  duration: 300,
  to: [
    { transform: "translate3d(-10px, 0, 0)" },
    { transform: "translate3d(10px, 0, 0)" },
    { transform: "translate3d(-10px, 0, 0)" },
    { transform: "translate3d(10px, 0, 0)" },
    { transform: "translate3d(0, 0, 0)" },
  ],
  config: { mass: 1, tension: 500, friction: 40 },
};
