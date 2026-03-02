/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

// Generar corazones flotantes fuera del componente
const floatingHearts = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 2,
  duration: 3 + Math.random() * 2,
}));

function App() {
  const [showLetter, setShowLetter] = useState(false);

  console.log("App mounted, showLetter:", showLetter);

 const paragraphs = [
  "Sé que no recuerdo todo perfectamente, pero quiero hacer lo mejor posible para que sepas que sí me importas… porque cada detalle tuyo lo fui guardando yo, sin darme cuenta, de una manera especial.",

  'Yo sé que te gusta Morat y Timo, y esa canción "Cigarettes and Sex". Sé que eres team frío y te gusta la lluvia, y que tal vez usas shampoo de vainilla coco (o al menos así senti tu aroma). Sé que te gustan los gatos negros de cualquier raza, y que tuviste uno negro con blanco. Yo sé que los perros te asustan aunque nunca te mordieron, y que una serpiente te dio el susto de tu vida.',

  "Yo me acuerdo que te gustan los resúmenes de k-dramas, que la torta favorita es red velvet bueno lo deduje, y que te gustan esas frases profundas que se quedan dando vueltas en la cabeza, como:"
];

const quote = [
  '"No puedes elegir si van a hacerte daño en este mundo, pero sí eliges quién te lo hace."'
];

const dates = [
  "22 de enero, la primera vez que nos vimos.",
  "6 de febrero, nuestra primera pelea.",
  '8 de febrero, ese raro momento en modo "pretendientes".',
  "20 de febrero, nuestro primer beso.",
  "Y esos maníes dulces y el chocolate que se quedaron como parte de mis recuerdos contigo."
];

const finalParagraphs = [
  "Tal vez no tenga la mejor memoria, pero sí tengo ganas, cariño y toda la intención de seguir conociéndote más. Porque si hay algo que tengo claro, es que nada de lo que sé de ti está ahí por casualidad, sino porque tú me importas más de lo que a veces sé decir.",

  "Y aunque no me acuerde de todo…",
  "sí me acuerdo de ti.",
  "Y eso es lo que más vale para mí."
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const heartVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="app">
      {/* Corazones flotantes de fondo */}
      <div className="hearts-container">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="floating-heart"
            style={{ left: `${heart.left}%` }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-100vh",
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.5],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {!showLetter ? (
        <motion.div
          className="intro-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            variants={heartVariants}
            initial="initial"
            animate="animate"
            className="big-heart"
          >
            💌
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Para ti, con amor
          </motion.h1>
          <motion.button
            className="open-button"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(255, 105, 180, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowLetter(true)}
          >
            Abrir Carta ❤️
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="letter-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="letter"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="letter-header"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2>Para la persona que se quedó en mi corazón</h2>
            </motion.div>

            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                className={index === 3 ? "quote" : ""}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              className="dates-section"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {dates.map((date, index) => (
                <motion.div
                  key={index}
                  className="date-item"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10, color: "#ff1493" }}
                >
                  <span className="heart-bullet">💕</span>
                  {date}
                </motion.div>
              ))}
            </motion.div>

            {finalParagraphs.map((text, index) => (
              <motion.p
                key={`final-${index}`}
                className={index > 0 ? "emphasis" : ""}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.15 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              className="signature"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.3 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                ❤️
              </motion.div>
              <p>Con todo mi amor</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
