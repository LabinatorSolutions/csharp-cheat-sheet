import { useThemeConfig } from '@docusaurus/theme-common';
import OriginalFooter from '@theme-original/Footer';

export default function Footer(props) {
  const { footer } = useThemeConfig();
  const yearlyFooter = footer
    ? {
        ...footer,
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://labinator.com" target="_blank" rel="noopener noreferrer">Labinator.com</a>`,
      }
    : footer;

  return <OriginalFooter {...props} footer={yearlyFooter} />;
}
