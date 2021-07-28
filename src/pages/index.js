import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop and Deploy</h3>
          <p>Front-end developer based in London</p>
          <Link className={styles.btn} to="/projects">
            My portfolio projects
          </Link>
        </div>
        <img src="/banner.png" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}
