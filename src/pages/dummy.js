import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import {
  Button,
  Image,
  CardDeck,
  Card,
  Carousel,
  CarouselItem,
} from "react-bootstrap"
import Layout from "../components/layout"
import Jumbo from "../components/jumbo"
import Insta from "../components/insta"

const Dummy = () => {
  return (
    <Layout>
      <Jumbo title="INI DUMMY" nav="Tentang Aku dan Kau" page="ini dummy" />

      <div className="container text-center my-4 py-4">
        <div className="row">
          <div
            className="col-lg-9 col-md-12 col-sm-12"
            style={{ background: "green", color: "white" }}
          >
            <h1>kabar terkini</h1>
          </div>
          <div
            className="col-lg-3 col-md-12 col-sm-12"
            style={{ background: "red", color: "white" }}
          >
            <div
              className=""
              style={{
                background: "grey",
              }}
            >
              <h1
                className=""
                style={{
                  background: "blue",
                }}
              >
                search bar
              </h1>
            </div>

            <div
              className=""
              style={{
                background: "grey",
              }}
            >
              {/* instagramnya belom bener */}
              <Insta />
            </div>

            <div
              className=""
              style={{
                background: "grey",
              }}
            >
              <h1
                className=""
                style={{
                  background: "blue",
                }}
              >
                facebook
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dummy
