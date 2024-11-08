
const categoryColors ={
    'ELECTRONICS': '#f20c69',
    'FASHION': '#373deb',
    'FOOD': '#acd60c',
    'TRAVEL': '#9425f7',
} as const;
export type Category = keyof typeof categoryColors;
export default categoryColors;