/** Keep the original application intact: React only hosts its document. */
export default function App() {
  return (
    <main className="application-shell">
      <iframe
        className="application-frame"
        title="Data Fácil con IA — aplicación interactiva"
        src={`${import.meta.env.BASE_URL}data-facil-con-ia.html`}
      />
    </main>
  );
}
