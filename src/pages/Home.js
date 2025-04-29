import React from 'react';

function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      minHeight: '100vh', 
      fontFamily: 'Arial, sans-serif',
      flexWrap: 'wrap' 
    }}>

      {/* Partie gauche */}
      <div style={{
        flex: '1 1 300px',
        backgroundColor: '#007bff',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        minWidth: '250px'
      }}>
        
        {/* Image */}
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '20px',
          border: '4px solid white'
        }}>
          <img 
            src="/Profile.jpg" 
            alt="Profil"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Infos */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '10px 0', fontSize: '20px' }}>AZEBAZEBAHEBEG AUREL BRYAN</h2>
          <p style={{ margin: '5px 0' }}>Email: bryanazebaze9@gmail.com</p>
          <p style={{ margin: '5px 0' }}>Téléphone: +237 652 959 183</p>
        </div>

      </div>

      {/* Partie droite */}
      <div style={{
        flex: '2 1 500px',
        backgroundColor: '#f0f0f0',
        padding: '30px',
        minWidth: '300px'
      }}>

        {/* À propos */}
        <section style={{ marginBottom: '30px' }}>
          <h2>À propos de moi</h2>
          <p style={{ fontSize: '16px', marginTop: '10px' }}>
            Jeune étudiant passionné par le développement mobile, j'aime créer des interfaces intuitives et esthétiques.
            Je suis curieux, dynamique et toujours prêt à apprendre.
          </p>
        </section>

        {/* Diplômes */}
        <section style={{ marginBottom: '30px' }}>
          <h2>Diplômes</h2>
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            <li>ICT4D Niveau 2, 2025 - Université de Yaoundé 1</li>
            <li>Baccalauréat Scientifique, 2019 - Lycée de Mendong</li>
          </ul>
        </section>

        {/* Expériences */}
        <section style={{ marginBottom: '30px' }}>
          <h2>Expériences académiques</h2>
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            <li>Application de gestion des notes en Java - Université de Yaoundé 1 (2025)</li>
            <li>Création d'un site e-learning sur la méthode agile (HTML, CSS, JavaScript) - Projet personnel</li>
          </ul>
        </section>

        {/* Compétences */}
        <section>
          <h2>Compétences</h2>
          <div style={{ marginTop: '20px' }}>
            
            <p>HTML / CSS</p>
            <div style={{ backgroundColor: '#ddd', borderRadius: '20px', overflow: 'hidden', marginBottom: '10px' }}>
              <div style={{ width: '75%', height: '20px', backgroundColor: '#007bff' }}></div>
            </div>

            <p>Gestion de base de données</p>
            <div style={{ backgroundColor: '#ddd', borderRadius: '20px', overflow: 'hidden', marginBottom: '10px' }}>
              <div style={{ width: '75%', height: '20px', backgroundColor: '#28a745' }}></div>
            </div>

            <p>Java</p>
            <div style={{ backgroundColor: '#ddd', borderRadius: '20px', overflow: 'hidden', marginBottom: '10px' }}>
              <div style={{ width: '35%', height: '20px', backgroundColor: '#ffc107' }}></div>
            </div>

            <p>C#</p>
            <div style={{ backgroundColor: '#ddd', borderRadius: '20px', overflow: 'hidden', marginBottom: '10px' }}>
              <div style={{ width: '35%', height: '20px', backgroundColor: '#17a2b8' }}></div>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
}

export default Home;
