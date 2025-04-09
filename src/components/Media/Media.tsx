import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';
import './Media.css';

interface Post {
  id: number;
  date: string | null;
  title: string;
  excerpt: string;
  category: string;
  link: string;
  imageUrl: string;
}

const Media: React.FC = () => {
  // Dynamic Header Blur Effect
  useEffect(() => {
    const header = document.querySelector('.header-container') as HTMLElement;
    if (header) {
      header.style.backdropFilter = `blur(20px)`; // Max blur of 10px
    }
  }, []);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const posts: Post[] = [
    {
        id: 1,
        "date": null,
        "title": "Rythmes Africains et dialogues musicaux : Zied Zouari enchante Hammamet lors de la 58ème Édition du Festival ",
        "excerpt": "La soirée du 11 juillet 2024 a offert au public du centre culturel international de Hammamet une expérience musicale inoubliable.Ils ont été emportés par une vague de rythmes et de sonorités, orchestrés par le talentueux musicien tunisien Zied Zouari dans sa nouvelle création “Made in Africa”.",
        "category": "Musicien.tn",
        "link": "https://musicien.tn/alaune/rythmes-africains-et-dialogues-musicaux-zied-zouari-enchante-hammamet-lors-de-la-58eme-edition-du-festival/?fbclid=IwY2xjawJeaCFleHRuA2FlbQIxMAABHkMJPvR3PWCYqmQJZ-7o9NEgH8HOIonLZXXK6Lbat_tVw7fVs4IZYbal2ScI_aem_GFNh1cncVPGIPy2TXXUl1g",
        "imageUrl": "/DSC07605.jpg"
    },
    {
        id: 2,
        "date": "16/09/2024",
        "title": "La tournée Japonaise du groupe “Duplessy et les violons du Monde” : le violoniste Tunisien Zied Zouari, resplendit sur la scène Internationale",
        "excerpt": "Le 15 septembre 2024, le groupe Duplessy et les violons du Monde a donné le coup d’envoi de sa tournée japonaise au Forest Hall d’Aichi, marquant le début d’une série de 10 concerts dédiés à la promotion de son album “The Road with you “, avec une sortie prévue pour le 29 janvier 2025 à La Cigale, Paris.",
        "category": "Musicien.tn",
        "link": "https://musicien.tn/alaune/la-tournee-japonaise-de-the-road-with-you-le-violoniste-tunisien-zied-zouari-resplendit-sur-la-scene-internationale/",
        "imageUrl": "/Duplessy---violins.jpg"
    },
    {
        id: 3,
        "date": "2024/07/13",
        "title": "Made in Africa est une peinture musicale africaine dirigée par le Tunisien Ziad Zouari",
        "excerpt": "Chaque pièce connote un engagement ou une histoire telle que Orion, l’étoile qui guide les subsahariens sur le chemin du nord.",
        "category": "alarab.co.uk",
        "link": "https://alarab.co.uk/%D9%85%D8%A7%D9%8A%D8%AF-%D8%A5%D9%86-%D8%A3%D9%81%D8%B1%D9%8A%D9%83%D8%A7-%D9%84%D9%88%D8%AD%D8%A9-%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%8A%D8%A9-%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A9-%D9%8A%D9%82%D9%88%D8%AF%D9%87%D8%A7-%D8%A7%D9%84%D8%AA%D9%88%D9%86%D8%B3%D9%8A-%D8%B2%D9%8A%D8%A7%D8%AF-%D8%A7%D9%84%D8%B2%D9%88%D8%A7%D8%B1%D9%8A?fbclid=IwY2xjawJeZ-JleHRuA2FlbQIxMAABHt8-1ZntY9zupbLjyQHCSJ1s151gSMqjyjofK3gmT-lH8GpKbqtHs7RWqB7Q_aem_nx8qkxWiJ0OEu8TId7p9NA&mibextid=oEMz7o",
        "imageUrl": "/image-1_18.jpg"
    },
    {
        id: 4,
        "date": "13/07/2024",
        "title": "En extase avec Zied Zouari",
        "excerpt": "Il serait à la fois facile et vain de parler de voyage musical à travers le spectacle Made in Africa du violoniste virtuose Zied Zouari, tenu au Festival International de Hammamet jeudi 11 juillet 2024. Il faudrait plutôt parler d’une exploration dans le temps, la Tunisie, comme l’a bien précisé l’artiste, s’appelait, il y a 1500 ans, Ifriqiya, la petite Afrique, nom qui sera attribué à tout le continent.",
        "category": "souffleinedit.com",
        "link": "En extase avec Zied Zouari - Musique - Souffle inédit",
        "imageUrl": "/image-1_18.jpg"
    },
    {
        id: 5,
        "date": "24/07/2019",
        "title": "FIC 2019: Soirée d’expérimentation musicale avec Zied Zouari, Nidhal Yahiaoui et Lina Ben Ali",
        "excerpt": "Le FIC dans sa 55ème édition a voulu démontrer que la programmation des jeunes artistes tunisiens au Théâtre romain de Carthage est un réel investissement dont les bénéfices sont immédiats. En témoigne la soirée du mardi 23 juillet 2019 avec la participation de Zied Zouari, Nidhal Yahiaoui et Lina Ben Ali qui ont assuré tous les trois une soirée spéciale au bonheur de leurs fans venus nombreux les encourager.",
        "category": "africanmanager.com",
        "link": "https://africanmanager.com/fic-2019-soiree-dexperimentation-musicale-avec-zied-zouari-nidhal-yahiaoui-et-lina-ben-ali/?fbclid=IwY2xjawJeaulleHRuA2FlbQIxMQABHilxw2UYqELZ1Zbhn6OEl5Fyx0rrbNOFHH7siVG-rbUiS3ZqjFKsiWlLy5WW_aem_yWWoxzt-GVKSi_BPMnPSWw",
        "imageUrl": "/festival-696x696.jpg"
    },
    {
        id: 6,
        "date": "17/10/2024",
        "title": "«Le concert des continents : Cordes en Harmonie» à Yasmine Hammamet : Une rencontre musicale au carrefour des cultures",
        "excerpt": "«La fondation Hasdrubal pour la culture et les arts Mohamed Amouri» et son directeur musical Laurent Jost invitent sur scène une floppée de musiciens professionnels et émergents, issus  de toutes les nationalités du monde pour «Le concert des continents». L’événement musical rime avec résonances et mélodies occidentales et orientales. Les cordes à instruments s’apprêtent à fusionner.",
        "category": "lapresse.tn",
        "link": "«Le concert des continents : Cordes en Harmonie» à Yasmine Hammamet : Une rencontre musicale au carrefour des cultures – La Presse de Tunisie",
        "imageUrl": "/le-concert-des-continents-01.jpg"
    },
    {
        "id": 7,
        "date": "28/06/2024",
        "title": "Zied Zouari Bine el Binine",
        "excerpt": "Le directeur artistique du spectacle de clôture du Festival arabe de la radio et de la télévision musicale, Zied Zouari, nous parle du spectacle Ruh Al-Arab, de la création de l'Orchestre symphonique arabe et de nombreux autres détails.",
        "category": "BinElBinin",
        "link": "(1) Facebook",
        "imageUrl": "/485118576_1163527591899405_7227321267193089362_n.jpg"
    },
    {
        "id": 8,
        "date": "15/06/2023",
        "title": "L'émission Marassi : Bab Al-Diwan, réunit les musiciens Zied Zouari (violon) et Ghassan Fendri (guitare).",
        "excerpt": "L'épisode d'aujourd'hui de l'émission Marassi est consacré à la découverte d'un projet musical venant de la ville historique de Sfax, en Tunisie, intitulé Bab Al-Diwan. Ce projet réunit les musiciens Zied Zouari (violon) et Ghassan Fendri (guitare)...",
        "category": " Monte Carlo Doualiya",
        "link": "https://www.facebook.com/share/v/16GEvLW4hK/",
        "imageUrl": "/481711906_1153203182931846_6834928654635318864_n.jpg"
    },
    {
        "id": 9,
        "date": "05/11/2024",
        "title": "« Circles » de Zied Zouari enchante le public de Dar Sebastian",
        "excerpt": "La 4éme rencontre « Les cordes de Dar Sebastian « organisée par le centre culturel international de hammamet, du 28 octobre au 03 novembre 2024 dans le cadre d’octobre musical se veut un espace de découverte, de diffusion et de transmission du répertoire musical au son d’un instrument phare, le violon. Cette manifestation a pris fin avec le concert « Circles » de Zied Zouari, une synthèse d’une longue réflexion autour du violon arabe contemporain.",
        "category": "letemps.news",
        "link": "« Circles » de Zied Zouari enchante le public de Dar Sebastian - Le Temps News",
        "imageUrl": "/CSC_0080-1-1200x799.jpg"
    }
];

  return (
    <div className="media-container">
      <Helmet>
        <title>Media | Zied Zouari</title>
      </Helmet>
      <Header />
      <main className="media-main" style={{ backgroundImage: `url('/background.jpg')` }}>
        <div className="blog-header">
          <h1>Coin Média</h1>
          <p>Les derniers articles qui parlent de Zied</p>
        </div>
        <div className="post-grid">
          {posts.map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={() => setSelectedPost(post)}
            >
              <img src={post.imageUrl} alt={post.title} />
              <div className="post-content">
                <span className="post-date">{post.date}</span>
                <h2>{post.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for displaying the full excerpt */}
        {selectedPost && (
          <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal"
                onClick={() => setSelectedPost(null)}
              >
                ×
              </button>
              <h2>{selectedPost.title}</h2>
              <p>{selectedPost.excerpt}</p>
              <button
                className="category-tag"
                onClick={() => window.open(selectedPost.link, '_blank')}
              >
                Lire Plus sur {selectedPost.category}
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Media;