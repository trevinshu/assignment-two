import errorLogo from '../components/error';
import appLogo from '../components/logo';
import heading from '../components/header';
import tagline from '../components/tagline';
import link from '../components/link';
const pageNotFound = () => {
  const page = document.createElement('div');
  page.classList.add('errorDiv');
  const errorAppLogo = appLogo();
  const appHeader = heading('appHeading', "Trevin's Todo App");
  const appTagline = tagline('appTagline', "App To Manage Your Todo's");
  const header = document.createElement('div');
  header.classList.add('headerContainer');
  const headerItems = document.createElement('div');
  headerItems.classList.add('headerItems');
  headerItems.append(appHeader, appTagline);
  header.append(errorAppLogo, headerItems);
  const errorIcon = errorLogo();
  const errorHeader = heading('errorHeading', '404 Error');
  const errorTagline = tagline('errorTagline', 'The page you are looking for cannot be found');
  const backBtn = link('Go Back', '/', 'backBtn');

  const errorContainer = document.createElement('div');
  errorContainer.classList.add('errorContainer');
  errorContainer.append(errorIcon, errorHeader, errorTagline, backBtn);
  page.append(header, errorContainer);

  return page;
};

export default pageNotFound;
