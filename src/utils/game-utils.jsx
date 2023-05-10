export const notes = [
  {
    name: "re2",
    file: "re",
    alt: "A seta aponta para o espaço antes do primeiro dedo",
  },
  { name: "mi", file: "mi", alt: "A seta aponta para o primeiro dedo" },
  {
    name: "fa",
    file: "fa",
    alt: "A seta aponta para o espaço entre o primeiro e o segundo dedo",
  },
  { name: "sol", file: "sol", alt: "A seta aponta para o segundo dedo" },
  {
    name: "la",
    file: "la",
    alt: "A seta aponta para o espaço entre o segundo e o terceiro dedo",
  },
  { name: "si", file: "si", alt: "A seta aponta para o terceiro dedo" },
  {
    name: "do",
    file: "do",
    alt: "A seta aponta para o espaço entre o terceiro e o quarto dedo",
  },
  { name: "re", file: "re", alt: "A seta aponta para o quarto dedo" },
  
  {
    name: "mi2",
    file: "mi",
    alt: "A seta aponta para o espaço entre o quarto e o quinto dedo",
  },
  {
    name: "fa2",
    file: "fa",
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
