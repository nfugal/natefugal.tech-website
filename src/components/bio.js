/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import profilePic from '../images/avatar.webp'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <img
              src={profilePic}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(4),
                height: rhythm(4),
                borderRadius: '50%',
              }}
            />
            <p>
              Written by <strong>{author}</strong>. He does stuff... sometimes. <br />
              {` `}
              You could follow him on <sp />
              <a href={`https://github.com/${social.twitter}`}>Github
              </a> if you'd like. <br />
              Or <sp />
              <a href={`https://twitter.com/${social.twitter}`}>
                Twitter
              </a>
              , but he's not very active on there, so maybe don't bother.
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
