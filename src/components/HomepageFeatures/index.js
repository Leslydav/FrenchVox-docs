import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Custom AI Phone Workflows',
    Svg: require('@site/static/img/hero.svg').default,
    description: (
      <>
        Bespoke consulting on Bubble.io, Vapi.ai & Twilio – from architecture to launch,
        We guide you every step of the way.
      </>
    ),
  },
  {
    title: 'Turnkey Deployment',
    Svg: require('@site/static/img/vapi11.svg').default,
    description: (
      <>
        I deliver fully built, ready-to-use solutions: voice assistants,
        scheduling, logs and analytics—all pre-wired and tested.
      </>
    ),
  },
  {
    title: 'Templates & Plugins',
    Svg: require('@site/static/img/mock-.svg').default,
    description: (
      <>
        Extend your Bubble apps with premium AI-driven telephone agents,
        reusable templates and custom plugins tailored to your needs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
