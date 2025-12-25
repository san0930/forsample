"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-he 5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >Happie Bornday My Princess, Meri Jaan....!
                        Keerthanaaaaaaa
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happiest birthday di Azhagiiiii ... Enaku romba pudicha person aah agitiga .. yarukachu wife ah pudikama povuma 🤣....Tbh Azhagu aitey poringa.. rombaaaa azhaguuuu 😭❤.. mere cutie pieee 🌝 Ithana year irundha maari inimey un life irukathu cuz na un kuda iruken .. irupen ipovum lifelong .. I can't prove the future but I can assure you so live and enjoy with me .. na romba thevalama nariya pesuven thevaye ilama una kovam akuren enakey thonum you deserve better nu ana aprom namaley avalukaha better ah aavo nu la yosipenn aana procrastinate panitey iruken 😂😭 ..un kuda relationship la iruka aarabichathula irundhu dhn na happy ah iruken .. enikachu oru nal bad day varum dhn.. adha nama paathukalam😤 adha thaandiyum nama ina irupom 😌🙂‍↕... dw una nala paathuka try panren atleast epovum happy ah vechuka mudilana  kuda peaceful life ah lead panuvo... Jus wait for me until the day we known as the world agreed couple in this society 😂 ana enaku una vitutu ponum nu endha oru thought uhm ila 🤣un porandhanal anikun blade poda virumbala 🤣ara bodhaila pesuna mari dhn iruku..sorryyyyyy.. edho enala mudinja oru chinna work.. unaku pudikum nu namburen🤣❤️✨



Once again happiest birthday my princess wifeeeyyyy mentalleeeeeey paithiyameyyy ponney azhagiii auntyyyy mummyyy akka etc .. Happy ah un life ah enjoy panu(en kuda) .. rendu perum jolly ah irupom Ms. Grace Keerthana🤣 endha oru sin uhm panama mrg ku aprom panikalam .  Apo adhulam sin illa .. elam konja varusham dhn rendu perum orey vetla vaazhuvo 😌 loveeeeeeeeeeeee youuuuuuuuuu moreeee my princesss
                    </p>
                </motion.div>
            </div>
        </div>
    )

}
