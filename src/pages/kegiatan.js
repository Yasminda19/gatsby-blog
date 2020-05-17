import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Button, Image, Card, CardDeck, Breadcrumb } from "react-bootstrap"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Jumbo from "../components/jumbo"
import kegiatanStyles from "./kegiatan.module.scss"

import blogStyles from "./blog.module.scss"
import Insta from "../components/insta"

const KegiatanPage = () => {
  return (
    <div>
      <Layout>
        <SEO title="KEGIATAN" />
        <Jumbo
          title="KEGIATAN"
          page="Kegiatan"
        />

    <div className={kegiatanStyles.slideKategori}>

              <span className="px-3">
                <Button href="#Card" className={kegiatanStyles.kegiatanButton}>
                 Minggu Ini
                </Button>
              </span>

              <span className="px-3">
                <Button href="#Card" className={kegiatanStyles.kegiatanButton}>
                  Akan Datang
                </Button>
              </span>

              <span className="px-3">
                <Button href="#Card" className={kegiatanStyles.kegiatanButton}>
                  Telah Berlalu
                </Button>
              </span>

</div>
        <div id="card" className={kegiatanStyles.kabarTerkini}>
          <div className={kegiatanStyles.containerKabarTerkini}>
            <div className={kegiatanStyles.cardKabarTerkini}>

              <div className={kegiatanStyles.title}>
                Siswa SMP Cendekia BAZNAS Ekspresikan Diri Lewat Penampilan Seni
              </div>

              <div className={kegiatanStyles.konten}>
              Siswa-siswi Sekolah Cendekia BAZNAS punya beragam cara untuk mengekspresikan diri. Salah satunya melalui penampilan seni dalam pagelaran Muhadoroh Akbar di Masjid Ahbaabullah SCB beberapa waktu lalu. Pembina Muhadhoroh Akbar, Hasan mengatakan program muhadoroh merupakan kegiatan rutin yang bertujuan ....
              </div>

              <div className={kegiatanStyles.detaiKonten1}>
                Posted by
              </div>

              <span className="px-3">
                <Button href="#mingguini" className={kegiatanStyles.selengkapnya}>
                 selengkapnya
                </Button>
              </span>

            </div>
          </div>
        </div>





        <div id="agenda" className="container my-5 py-5">
         <div className="column">
           <Insta />
         </div>
       </div>

</Layout>
    </div>
  )
}

export default KegiatanPage

// import React from "react"
// import { Link, graphql, useStaticQuery } from "gatsby"
// import SEO from "../components/seo"

// import Layout from "../components/layout"
// import blogStyles from "./blog.module.scss"
// import Insta from "../components/insta"

// const PageKabar = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulAgenda {
//         edges {
//           node {
//             lokasi
//             konten
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <Layout>
//       <SEO title="Kabar Terkini" />

//       <div id="agenda" className="container my-5 py-5">
//         <div className="row">
//           <h1>Kegiatan</h1>
//           <Insta />
//           <ol>
//             {data.allContentfulAgenda.edges.map(edge => {
//               return (
//                 <div className="card" style={{ minHeight: "50px" }}>
//                   <li>
//                     <h2>{edge.node.konten}</h2>
//                     <p>{edge.node.lokasi}</p>
//                   </li>
//                 </div>
//               )
//             })}
//           </ol>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default PageKabar
