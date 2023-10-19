import Link from 'next/link';

export const frontendText = (
  <ul>
    <li>
      Modern{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://en.wikipedia.org/wiki/JavaScript"
        target="_blank"
        rel="noopener noreferrer"
      >
        JavaScript
      </Link>{' '}
      and{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TypeScript
      </Link>
    </li>
    <li>
      Single page applications built within the{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://react.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React ecosystem
      </Link>
    </li>
    <li>
      Styling: plain CSS,{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TailwindCSS
      </Link>
      ,{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://cssinjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CSS-in-JS
      </Link>
      ,{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://styled-components.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Styled-Components
      </Link>
      ,{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://mui.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        MaterialUI
      </Link>
    </li>
    <li>
      Testing:{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://jestjs.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jest
      </Link>
      , React-Testing-Library,{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://www.cypress.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cypress
      </Link>
    </li>
    <li>UI & UX responsive designs</li>
    <li>
      Web performance optimization: server side rendering, lazy loading,
      memoization
    </li>
    <li>
      Frameworks:{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        NextJS
      </Link>
      ,{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://vitejs.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vite
      </Link>
      ,{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://create-react-app.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Create-React-App
      </Link>
    </li>
  </ul>
);

export const backendText = (
  <ul>
    <li>
      NodeJS web servers:{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://nestjs.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        NestJS
      </Link>
    </li>
    <li>
      Microservice architecture:{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://www.python.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Python
      </Link>
    </li>
    <li>
      APIs: REST &{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://graphql.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        GraphQL
      </Link>
    </li>
    <li>
      Cloud providers:{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://aws.amazon.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        AWS
      </Link>
      ,{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://vercel.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vercel
      </Link>
    </li>
    <li>
      Infrastructure:{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://www.docker.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Docker
      </Link>
      ,{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://kubernetes.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kubernetes
      </Link>
      ,{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://www.terraform.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terraform
      </Link>
    </li>
    <li>
      Databases:{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://www.postgresql.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        PostgreSQL
      </Link>
    </li>
    <li>
      BaaS:{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://supabase.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Supabase
      </Link>
    </li>
    <li>
      CI/CD:{' '}
      <Link
        className="text-palatinate_blue hover:text-azure transition duration-300"
        href="https://gitlab.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gitlab pipelines
      </Link>
    </li>
  </ul>
);
