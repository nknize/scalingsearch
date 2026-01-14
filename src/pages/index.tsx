import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.publisherBadge}>
              <img
                src="https://www.oreilly.com/favicon.ico"
                alt="O'Reilly Media"
                className={styles.publisherIcon}
              />
              <span>Published by O'Reilly Media</span>
            </div>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <p className={styles.heroDescription}>
              Your guide to designing modern search infrastructure for contextual AI. Whether you're
              modernizing an aging cluster, integrating RAG into your LLM pipeline, or simply trying
              to understand what makes search and retrieval tick, this is your blueprint.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className="button button--primary button--lg"
                to="#reviewer-signup">
                Become a Reviewer
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                View Examples
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src={require('@site/static/img/book-cover.png').default}
              alt="Scaling Search and Retrieval for Contextual AI Book Cover"
              className={styles.bookCover}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutBook(): ReactNode {
  const learningPoints = [
    'Architect search and retrieval systems that enable scalable, performant, and secure AI inference',
    'Navigate the trade-offs between indexing and retrieval models',
    'Apply proven patterns to build fault-tolerant, efficient search infrastructure',
    'Support hybrid and AI-native workloads with structured, unstructured, and vector data',
    'Optimize performance, storage, and resilience across varied deployment topologies and constraints',
  ];

  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          <Heading as="h2">About This Book</Heading>
          <p className={styles.aboutLead}>
            AI models are only as good as the context they can retrieve. Without the right data at the
            right moment, even the most powerful models fail. You might even say that search and retrieval
            is the most important layer of the AI stack.
          </p>
          <p>
            Written by Nicholas Knize, the creator of AWS OpenSearch and Founder of Lucenia, this book explores the full lifecycle
            of search systems from indexing and query execution to sharding, vector search, hybrid retrieval,
            and real-world AI integration.
          </p>
          <p className={styles.aboutHighlight}>
            What makes this book unique is its systems-first approach. Rather than explaining
            how to operate existing tools, it teaches you how to build the tools themselves.
          </p>
          <div className={styles.learningPoints}>
            <Heading as="h3">With this book, you will:</Heading>
            <ul>
              {learningPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TargetAudience(): ReactNode {
  const audiences = [
    {
      title: 'Backend Engineers',
      description: 'Working on search, logs, observability, or ML pipelines',
    },
    {
      title: 'AI/ML Engineers',
      description: 'Integrating information retrieval for contextual AI',
    },
    {
      title: 'SREs and DevOps',
      description: 'Deploying search clusters in hybrid environments',
    },
    {
      title: 'Architects',
      description: 'Evaluating or replacing legacy search infrastructure',
    },
    {
      title: 'Developers',
      description: 'Building multimodal or vector-native applications',
    },
  ];

  return (
    <section className={styles.audienceSection}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Who This Book Is For</Heading>
        </div>
        <div className={styles.audienceGrid}>
          {audiences.map((audience, idx) => (
            <div key={idx} className={styles.audienceCard}>
              <strong>{audience.title}</strong>
              <span>{audience.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouWillLearn(): ReactNode {
  const understand = [
    {
      title: 'The Foundation of Contextual AI',
      description: 'Why search and retrieval form the foundation of contextual AI and how they enable performant, secure, and scalable AI inference.',
    },
    {
      title: 'Modern Search Architecture',
      description: 'How modern search engines are architected from core data structures to distributed execution.',
    },
    {
      title: 'Key Principles & Characteristics',
      description: 'The key principles and characteristics of effective search and information retrieval systems that power contextual AI within organizations.',
    },
    {
      title: 'Indexing & Retrieval Tradeoffs',
      description: 'The tradeoffs between different indexing and retrieval models, including inverted indexes, vector graphs, and hybrid pipelines.',
    },
  ];

  const abilities = [
    {
      title: 'Design Scalable Systems',
      description: 'Identify and apply the design patterns required for building scalable, efficient, and resilient search systems from local environments to global deployments.',
    },
    {
      title: 'Integrate Hybrid Retrieval',
      description: 'Integrate structured, unstructured, and vector-based retrieval methods to support hybrid and AI-native applications.',
    },
    {
      title: 'Optimize Performance',
      description: 'Diagnose and optimize search performance, storage footprint, and system resilience across a variety of deployment topologies and resource constraints.',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">What You Will Learn</Heading>
          <p className={styles.sectionSubtitle}>
            A comprehensive journey from fundamentals to production-scale systems
          </p>
        </div>
        <div className="text--center margin-bottom--md">
          <Heading as="h3" className={styles.learnSubheading}>You will understand:</Heading>
        </div>
        <div className="row margin-bottom--lg">
          {understand.map((topic, idx) => (
            <div key={idx} className={clsx('col col--6', styles.featureCol)}>
              <div className={styles.featureCard}>
                <Heading as="h4">{topic.title}</Heading>
                <p>{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text--center margin-bottom--md">
          <Heading as="h3" className={styles.learnSubheading}>You will be able to:</Heading>
        </div>
        <div className="row">
          {abilities.map((topic, idx) => (
            <div key={idx} className={clsx('col col--4', styles.featureCol)}>
              <div className={styles.featureCard}>
                <Heading as="h4">{topic.title}</Heading>
                <p>{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutAuthor(): ReactNode {
  return (
    <section className={styles.authorSection}>
      <div className="container">
        <div className={styles.authorContent}>
          <div className={styles.authorImageWrapper}>
            <img
              src={require('@site/static/img/author-photo.png').default}
              alt="Nick Knize"
              className={styles.authorImage}
            />
          </div>
          <div className={styles.authorText}>
            <Heading as="h2">About the Author</Heading>
            <p className={styles.authorName}>Nick Knize</p>
            <p>
              Nick Knize is a seasoned software engineer and architect with deep expertise in search
              and distributed systems. As a core contributor to open-source search technologies and
              the founder of Lucenia, Nick brings years of hands-on experience building and scaling
              search infrastructure for enterprise applications and AI systems.
            </p>
            <p>
              His work spans from low-level data structure optimization to high-level system design,
              making him uniquely qualified to guide readers through the complete stack of modern
              search and retrieval systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LuceniaSection(): ReactNode {
  return (
    <section className={styles.luceniaSection}>
      <div className="container">
        <div className={styles.luceniaContent}>
          <div className={styles.luceniaText}>
            <Heading as="h2">Powered by Lucenia</Heading>
            <p>
              All examples in this book use <strong>Lucenia</strong>, the open-source scalable search
              AI platform. Lucenia provides a production-ready environment for implementing the
              concepts covered in each chapter.
            </p>
            <p>
              From basic indexing operations to complex distributed vector search, you'll gain
              practical experience with real-world tools and techniques.
            </p>
            <div className={styles.luceniaButtons}>
              <Link
                className="button button--primary button--lg"
                href="https://lucenia.io">
                Learn More About Lucenia
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Explore Code Examples
              </Link>
            </div>
          </div>
          <div className={styles.luceniaLogo}>
            <img
              src={require('@site/static/img/lucenia-logo.jpg').default}
              alt="Lucenia - Scalable Search AI Platform"
              className={styles.luceniaLogoImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewerSignup(): ReactNode {
  return (
    <section id="reviewer-signup" className={styles.reviewerSection}>
      <div className="container">
        <div className={styles.reviewerContent}>
          <Heading as="h2">Become a Technical Reviewer</Heading>
          <p className={styles.reviewerDescription}>
            We're looking for experienced engineers, researchers, and practitioners to provide
            feedback on early drafts. As a reviewer, you'll get early access to chapters
            and influence the final content.
          </p>
          <div className={styles.reviewerBenefits}>
            <div className={styles.benefitItem}>
              <strong>Early Access</strong>
              <span>Read chapters before publication</span>
            </div>
            <div className={styles.benefitItem}>
              <strong>Shape the Content</strong>
              <span>Your feedback directly impacts the book</span>
            </div>
            <div className={styles.benefitItem}>
              <strong>Direct Access</strong>
              <span>Connect directly with the author</span>
            </div>
          </div>
          <form
            className={styles.signupForm}
            action="https://formspree.io/f/xbddjnov"
            method="POST"
          >
            <div className={styles.formRow}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className={styles.formInput}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formRow}>
              <input
                type="text"
                name="expertise"
                placeholder="Areas of Expertise (e.g., distributed systems, ML, search)"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formRow}>
              <textarea
                name="background"
                placeholder="Brief background and why you're interested in reviewing (optional)"
                rows={3}
                className={styles.formTextarea}
              />
            </div>
            <button type="submit" className="button button--primary button--lg">
              Sign Up to Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Your guide to designing modern search infrastructure for contextual AI. Learn vector search, RAG, distributed systems, and AI integration from the creator of AWS OpenSearch.">
      <HeroSection />
      <main>
        <AboutBook />
        <TargetAudience />
        <WhatYouWillLearn />
        <AboutAuthor />
        <LuceniaSection />
        <ReviewerSignup />
      </main>
    </Layout>
  );
}
