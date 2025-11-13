export default function CarteRemplirNiveau({ contenu, onValidate }) {
    const [answers, setAnswers] = useState({});
  
    const handleChange = (id, value) => {
      setAnswers({ ...answers, [id]: value });
    };
  
    const handleSubmit = () => {
      const result = contenu.zones.every(
        z => answers[z.id]?.trim().toLowerCase() === z.expected.toLowerCase()
      );
      onValidate(result);
    };
  
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">{contenu.instructions}</h2>
        <div className="relative">
          <img src={contenu.image_url} alt="Carte à compléter" className="rounded-lg shadow-lg" />
          {contenu.zones.map((zone) => (
            <input
              key={zone.id}
              type="text"
              placeholder={zone.label}
              className="absolute border p-1 rounded bg-white/70 text-center"
              style={{ left: zone.position.x, top: zone.position.y }}
              onChange={(e) => handleChange(zone.id, e.target.value)}
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
        >
          Valider
        </button>
      </div>
    );
  }
  