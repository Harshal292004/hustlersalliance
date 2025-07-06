import { Libre_Baskerville, Libre_Caslon_Display } from 'next/font/google'

const libre_baskerville = Libre_Baskerville(
    {
        weight: "700",
        style: ['italic', 'normal'],
        subsets: ['latin']
    }
)

const libre_caslon_display = Libre_Caslon_Display(
    {
        weight: "400",
        subsets: ['latin']
    }
)

export { libre_baskerville, libre_caslon_display };