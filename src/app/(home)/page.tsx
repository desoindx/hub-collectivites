import styles from "./page.module.css";
import classNames from "classnames";
import Button from "@codegouvfr/react-dsfr/Button";
import Tile from "@codegouvfr/react-dsfr/Tile";
import Image from "next/image";

export default async function HomePage() {
  return <>
    <div className={classNames(styles.section, styles.presentationSection)}>
      <div className="fr-container">
        <h1 className={styles.mainTitle}>La plateforme d'accompagnement sur mesure pour vos projets</h1>
        <div
          className="fr-text--lead">Accélérer vos projets du quotidien en les orientant le plus en amont possible vers
          le bon service d'accompagnement
        </div>
        <Button className={styles.button} linkProps={{href: '#'}}>Etre accompagné</Button>
      </div>
    </div>
    <div className={styles.section}>
      <div className="fr-container">
        <h2 className="fr-h2">Un service intégré à l'écosystème</h2>
        <div className="fr-tile">
          <div className="fr-tile__body">
            <div className="fr-tile__content">
              <div className={classNames("fr-tile__title", styles.logoImages)}>
                <Image src={"/images/home/logo-mte.jpg"}
                       alt="Logo du ministère de la transition Ecologique"
                       width={116} height={120}/>
                <Image src={"/images/home/logo-anct.jpg"}
                       alt="Logo de l'ANCT"
                       width={211} height={121}/>
                <Image src={"/images/home/logo-ademe.png"} alt="Logo de l'ADEME"
                       width={80} height={94}/>
                <Image src={"/images/home/logo-cerema.png"} alt="Logo du CEREMA"
                       width={193} height={57}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classNames(styles.section, styles.explanationSection)}>
      <div className="fr-container">
        <h2 className="fr-h2">Simple et concret pour les collectivités</h2>
        <div className={styles.explanationSteps}>
          <Tile
            title="1. Décrivez votre projet"
            desc="Quelques informations clés pour être orienté vers le bon service / interlocuteur"
            imageUrl="/images/home/information.svg"
            className={styles.explanationStep}
          />

          <Tile
            title="2. Bénéficiez de services"
            desc="Retrouvez les demandes de votre territoire, échanger et collaborer avec l’Etat"
            imageUrl="/images/home/boussole.svg"
            className={styles.explanationStep}
          />
          <Tile
            title="3. Suivez vos projets"
            desc="Un délégué territorial, l’ANCT ou un partenaire vous contacte pour les prochaines étapes"
            imageUrl="/images/home/flow.svg"
            className={styles.explanationStep}
          />
        </div>
      </div>
    </div>
    <div className={classNames(styles.section, styles.contactSection)}>
      <div className="fr-container">
        <h2 className="fr-h2">Une question, un avis ? Contactez-nous</h2>
        <div>
          Si vous souhaitez contacter l’équipe pour une question, un problème ou simplement donnez votre avis dans le
          but d’améliorer le service, n’hésitez pas à nous écrire via le formulaire ci-dessous.
        </div>
        <Button className={styles.button} priority="secondary" linkProps={{href: '#'}}>
          Contactez-nous
        </Button>
      </div>
    </div>
  </>
    ;
}
