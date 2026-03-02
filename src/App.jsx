/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const envelopes = [
  {
    id: 1,
    title: "Abre cuando estés triste",
    content:
      "Pame, sé que a veces las cosas se ponen difíciles. Pero quiero que recuerdes que no estás sola. Estoy aquí para ti, siempre. Tu sonrisa es lo más hermoso que he visto, y haré todo lo posible por verla de nuevo. Eres fuerte, valiente y absolutamente increíble. Este momento pasará, y yo estaré aquí contigo, mi chocolatito de leche. Te amo más de lo que las palabras pueden expresar. 💕",
    emoji: "😢",
  },
  {
    id: 2,
    title: "Abre cuando me extrañes",
    content:
      "Mimi, yo también te extraño muchísimo. Cada momento sin ti se siente eterno. Pero piensa en esto: cada segundo que pasa es un segundo menos para volver a verte. Cierra los ojos y recuerda nuestro último abrazo, nuestras risas, esos momentos tontos que tanto amamos. Pronto estaremos juntos de nuevo y será aún mejor. Te llevo en mi corazón siempre. 💝",
    emoji: "💭",
  },
  {
    id: 3,
    title: "Abre cuando no puedas dormir",
    content:
      "Pamela, sé que tu mente a veces no te deja descansar. Respira profundo conmigo: inhala... exhala... Imagina que estoy ahí contigo, abrazándote y acariciando tu cabello. Todo va a estar bien. Mañana será un nuevo día lleno de posibilidades. Descansa tranquila sabiendo que eres amada, protegida y valorada. Dulces sueños, mi amor. 🌙",
    emoji: "🌙",
  },
  {
    id: 4,
    title: "Abre cuando estés feliz",
    content:
      "¡Ese es el espíritu! Me encanta cuando estás feliz, tu energía es contagiosa y hace que mi día sea mejor. Celebra cada momento de alegría, te lo mereces todo y más. Tu felicidad es mi felicidad. Sigue brillando como la estrella que eres. Estoy tan orgulloso de ti y de todo lo que logras. ¡Te amo, mi sol! ☀️",
    emoji: "😊",
  },
  {
    id: 5,
    title: "Abre cuando necesites motivación",
    content:
      "Escúchame bien: tú puedes con todo. Eres más capaz de lo que crees. Has superado tantas cosas difíciles y seguirás haciéndolo. No te rindas ahora. Cada paso que das, por pequeño que sea, te acerca a tus metas. Confío en ti completamente, mi Mimi. Vamos juntos, siempre. 💪",
    emoji: "💪",
  },
  {
    id: 6,
    title: "Abre cuando quieras reír",
    content:
      "¿Recuerdas cuando nos reímos tanto? 😂 Tu risa es mi sonido favorito en el mundo. Eres la persona más divertida y especial que conozco. Nunca pierdas esa chispa que te hace única. Aquí va un chiste malo: ¿Qué le dice un gato a otro gato? ¡Miau! Jajaja, estuvo malísimo, pero ojalá te saque una sonrisa. Te amo. 😄",
    emoji: "😂",
  },
  {
    id: 7,
    title: "Abre cuando dudes de ti misma",
    content:
      "Déjame decirte algo: eres increíble. No perfecta, pero perfecta para mí. Tus defectos son parte de lo que te hace especial. Eres inteligente, hermosa, talentosa y única. No dejes que nadie (ni siquiera tú misma) te haga dudar de tu valor. Yo veo en ti todo lo que eres capaz de ser. Confía en ti tanto como yo confío en ti, Pame. 💖",
    emoji: "✨",
  },
  {
    id: 8,
    title: "Abre cuando te sientas sola",
    content:
      "Aunque no esté físicamente ahí, estoy contigo siempre. En cada latido de tu corazón, en cada pensamiento. Tú y yo estamos conectados de una manera especial que el espacio no puede romper. Cuando te sientas sola, mira el cielo: estamos bajo las mismas estrellas. Piensa en mí, porque yo definitivamente estoy pensando en ti, mi chocolatito de leche. Nunca estás sola. 🌟",
    emoji: "🤗",
  },
  {
    id: 9,
    title: "Abre solo porque sí",
    content:
      "No necesitas una razón especial para saber cuánto te amo. Hoy, mañana y siempre, eres lo más importante para mí. Gracias por existir, por elegirme y por ser tú. Cada día contigo (o pensando en ti) es un regalo. Eres mi persona favorita en todo el universo. Te amo infinitamente. Por siempre tuyo. 💗",
    emoji: "💌",
  },
];

function App() {
  const [openedEnvelopes, setOpenedEnvelopes] = useState([]);
  const [selectedEnvelope, setSelectedEnvelope] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("openedEnvelopes");
    if (saved) {
      setOpenedEnvelopes(JSON.parse(saved));
    }
  }, []);

  const handleOpenEnvelope = (envelope) => {
    setSelectedEnvelope(envelope);
    if (!openedEnvelopes.includes(envelope.id)) {
      const updated = [...openedEnvelopes, envelope.id];
      setOpenedEnvelopes(updated);
      localStorage.setItem("openedEnvelopes", JSON.stringify(updated));
    }
  };

  const handleClose = () => {
    setSelectedEnvelope(null);
  };

  console.log("App mounted, selectedEnvelope:", selectedEnvelope);

  return (
    <div className="app">
      {/* Corazones flotantes de fondo */}
      <div className="hearts-container">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-heart"
            style={{ left: `${Math.random() * 100}%` }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-100vh",
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <div className="main-content">
        <motion.div
          className="header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Abre cuando... 💌</h1>
          <p className="subtitle">Mensajes especiales para ti, mi amor</p>
        </motion.div>

        <div className="envelopes-grid">
          {envelopes.map((envelope, index) => {
            const isOpened = openedEnvelopes.includes(envelope.id);
            return (
              <motion.div
                key={envelope.id}
                className={`envelope-card ${isOpened ? "opened" : ""}`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(255, 105, 180, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOpenEnvelope(envelope)}
              >
                <div className="envelope-emoji">{envelope.emoji}</div>
                <h3>{envelope.title}</h3>
                {isOpened && <div className="opened-badge">Ya leído ✓</div>}
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedEnvelope && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.5, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 180 }}
              transition={{ duration: 0.5, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="modal-emoji"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                {selectedEnvelope.emoji}
              </motion.div>
              <h2>{selectedEnvelope.title}</h2>
              <motion.div
                className="modal-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {selectedEnvelope.content}
              </motion.div>
              <motion.button
                className="close-button"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Cerrar ❤️
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
