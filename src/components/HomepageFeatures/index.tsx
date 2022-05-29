import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Vue",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Vue技术思考</>,
  },
  {
    title: "React",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>React学习思考</>,
  },
  {
    title: "JavaScript",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>JavaScript技术思考</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
