import { SkillLink } from '@/components/SkillLink/SkillLink';

export const frontendText = (
  <ul className="pl-4">
    <li>
      Modern{' '}
      <SkillLink
        href="https://en.wikipedia.org/wiki/JavaScript"
        title="JavaScript"
      />{' '}
      and{' '}
      <SkillLink href="https://www.typescriptlang.org/" title="TypeScript" />
    </li>
    <li>
      Single page applications built within the{' '}
      <SkillLink href="https://react.dev/" title="React ecosystem" />
    </li>
    <li>
      Styling: plain CSS,{' '}
      <SkillLink href="https://tailwindcss.com/" title="TailwindCSS" />,{' '}
      <SkillLink href="https://cssinjs.org/" title="CSS-in-JS" />,{' '}
      <SkillLink
        href="https://styled-components.com/"
        title="Styled-Components"
      />
      , <SkillLink href="https://mui.com/" title="MaterialUI" />
    </li>
    <li>
      Testing: <SkillLink href="https://jestjs.io/" title="Jest" />,
      React-Testing-Library,{' '}
      <SkillLink href="https://www.cypress.io/" title="Cypress" />
    </li>
    <li>UI & UX responsive designs</li>
    <li>
      Web performance optimization: server side rendering, lazy loading,
      memoization
    </li>
    <li>
      Frameworks: <SkillLink href="https://nextjs.org/" title="NextJS" />,{' '}
      <SkillLink href="https://vitejs.dev/" title="Vite" />,{' '}
      <SkillLink
        href="https://create-react-app.dev/"
        title="Create-React-App"
      />
    </li>
  </ul>
);

export const backendText = (
  <ul className="pl-4">
    <li>
      NodeJS web servers:{' '}
      <SkillLink href="https://nestjs.com/" title="NestJS" />
    </li>
    <li>
      Microservice architecture:{' '}
      <SkillLink href="https://www.python.org/" title="Python" />
    </li>
    <li>
      APIs: REST & <SkillLink href="https://graphql.org/" title="GraphQL" />
    </li>
    <li>
      Cloud providers: <SkillLink href="https://aws.amazon.com/" title="AWS" />,{' '}
      <SkillLink href="https://vercel.com/" title="Vercel" />
    </li>
    <li>
      Infrastructure:{' '}
      <SkillLink href="https://www.docker.com/" title="Docker" />,{' '}
      <SkillLink href="https://kubernetes.io/" title="Kubernetes" />,{' '}
      <SkillLink href="https://www.terraform.io/" title="Terraform" />
    </li>
    <li>
      Databases:{' '}
      <SkillLink href="https://www.postgresql.org/" title="PostgreSQL" />
    </li>
    <li>
      BaaS: <SkillLink href="https://supabase.com/" title="Supabase" />
    </li>
    <li>
      CI/CD: <SkillLink href="https://gitlab.com/" title="Gitlab pipelines" />
    </li>
    <li>
      Misc: <SkillLink href="https://cube.dev/" title="CubeJS" />,{' '}
      <SkillLink href="https://superset.apache.org/" title="Superset" />
    </li>
  </ul>
);
