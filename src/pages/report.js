import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import {Button, Image, Card, CardDeck, Breadcrumb} from "react-bootstrap"

import Layout from "../components/layout"
import Jumbo from "../components/jumbo"

const ReportPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAnnualReport( sort: { fields: createdAt, order: DESC } ) {
        edges {
          node {
            title
            pdfLink
            coverImage {
              file {
                url
              }
            }
            date
          }
        }
      }
      contentfulJumbotronHalaman(
        jumbotronHalaman: { eq: "Halaman Annual Report" }
      ) {
        jumbotronHalaman
        jumbotronGambar {
          fixed {
            srcWebp
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Jumbo
          title="Annual Report"
          nav="Informasi"
          page="Annual Report"
          image={data.contentfulJumbotronHalaman.jumbotronGambar.fixed.srcWebp}
        />

        <div className="container my-5 py-5">
          {
            data.allContentfulAnnualReport.edges.map(edge => {
              return (
                <div className="row my-5">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="row">
                          <span className="font-weight-bold h4 ml-2 my-1">{edge.node.title}</span>
                          <a href={edge.node.pdfLink} className="btn btn-primary ml-auto mr-2">Unduh</a>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <a href={edge.node.pdfLink}>
                          <img src={edge.node.coverImage.file.url} alt="cover" className=""/>
                        </a>
                      </div>
                      <div className="card-footer text-center text-muted">
                        Posted on {edge.node.date}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </Layout>
    </div>
  )
}

export default ReportPage
