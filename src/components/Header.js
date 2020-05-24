import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Logo from 'components/svg/Logo';
import styled from 'styled-components';
import tw from 'twin.macro';
import menu from 'data/menu';
import { FaCaretDown } from 'react-icons/fa';
import classnames from 'classnames';

const Container = styled.header`
  ${tw`transition transition-all duration-200 fixed`}
  padding: 5px 0;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: ${props =>
    props.dark ? `none` : `0 1px 2px rgba(0, 0, 0, 0.1)`};
  ${props =>
    props.dark && !props.fixed
      ? `background-color: rgba(0,0,0,0.5);`
      : tw`bg-white`}
`;

const LogoWrapper = styled.div`
  position: relative;
  z-index: 2;
  a {
    ${props =>
      (props.dark && !props.fixed) || props.open
        ? tw`text-white`
        : tw`text-gray-900`};
    svg {
      ${tw`transition transition-all duration-200`};
    }
  }
`;

const Menu = styled.nav`
  a {
    text-decoration: none;
    font-weight: 500;
  }
  > li {
    display: inline-block;
    margin-left: 40px;
    position: relative;
    padding: 20px 0;

    &.active > a {
      ${tw`text-primary`};
    }

    &:hover {
      ul {
        ${tw`opacity-100 visible`}
      }
    }
  }
  > li > a {
    transition: all 0.25s ease;
    ${tw`flex items-center`};
    svg {
      margin-left: 2px;
    }
    ${props =>
      props.dark && !props.fixed
        ? tw`text-white hover:text-primary`
        : tw`text-gray-900 hover:text-primary`}
  }
  ul {
    ${tw`absolute shadow bg-white`}
    bottom: 1px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(100%);
    padding: 10px 0;
    a {
      padding: 0 27px;
      min-width: 150px;
      white-space: nowrap;
      height: 40px;
      ${tw`flex items-center text-gray-900 hover:text-white hover:bg-primary bg-white`};
    }
  }
`;

const MobileMenu = styled.ul`
  ${tw`bg-black absolute pb-5`}
  padding-top: 90px;
  z-index: 1;
  right: 0;
  left: 0;
  top: 0;
  font-size: 20px;

  a {
    ${tw`font-medium no-underline`}
  }
  > li {
    ${tw`relative ml-10 block py-5`}

    &:hover {
      ul {
        ${tw`opacity-100 visible`}
      }
    }
  }
  > li > a {
    ${tw`flex items-center`};
    svg {
      margin-left: 5px;
    }
  }
  ul {
    padding-top: 10px;
    a {
      ${tw`flex items-center px-4 mt-6`};
      min-width: 150px;
      &:before {
        content: '';
        display: block;
        width: 27px;
        height: 2px;
        margin-right: 10px;
        ${tw`bg-white`}
      }
      &:hover:before {
        ${tw`bg-primary`}
      }
    }
  }
  a {
    ${tw`text-white hover:text-primary`}
  }
`;

const BurgerButton = styled.div`
  ${tw`lg:hidden cursor-pointer relative`};
  z-index: 2;
  margin-right: 5px;
  width: 26px;
  height: 20px;

  span {
    width: 28px;
    height: 4px;
    display: block;
    position: absolute;
    transform-origin: 50% 50%;
    transition: all 0.25s ease;
    background-color: ${props =>
      props.open
        ? tw`bg-white`
        : props.dark && !props.fixed
        ? tw`bg-white`
        : tw`bg-gray-900`}

    &:nth-child(1) {
      top: ${props => (props.open ? '50%' : 0)};
      transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0deg)')};
    }

    &:nth-child(2) {
      top: 50%;
      margin-top: -2px;
      display: ${props => (props.open ? 'none' : 'block')};
    }

    &:nth-child(3) {
      bottom: ${props => (props.open ? 'auto' : '0px')};
      top: ${props => (props.open ? '50%' : 'auto')};
      transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }
  }
`;

class Header extends Component {
  state = {
    open: false,
    fixed: false,
    current: ''
  };

  onScroll = () => {
    const top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (top > 0 && !this.state.fixed) {
      this.setState({ fixed: true });
    } else if (top === 0) {
      this.setState({ fixed: false });
    }

    let current = '';
    this.sections.forEach(({ node }) => {
      // Start to toggle pagination after reaching the height of 2/5 screen height
      if (top > node.offsetTop - window.screen.height * 0.2) {
        current = '/#' + node.id;
      }
    });

    this.setState({
      current
    });
  };

  handleLinkClick = href => e => {
    if (
      !['/#jobs', '/#news', '/#events'].includes(href) ||
      !this.props.onePage
    ) {
      return;
    }
    e.preventDefault();
    const el = document.querySelector(href.replace('/', ''));
    if (!el) {
      return;
    }
    window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    });
  };

  componentDidMount() {
    if (this.props.onePage) {
      document.addEventListener('scroll', this.onScroll);
      this.sections = ['#jobs', '#news', '#events', '#supporters'].map(
        selector => ({
          node: document.querySelector(selector),
          href: `/${selector}`
        })
      );
    }
  }

  componentWillUnmount() {
    if (this.props.onePage) {
      document.removeEventListener('scroll', this.onScroll);
    }
  }

  toggleOpen = () => {
    this.setState(({ open }) => ({
      open: !open
    }));
  };

  render() {
    const { absolute, dark } = this.props;
    return (
      <Container absolute={absolute} dark={dark} fixed={this.state.fixed}>
        <div className="container mx-auto px-gutter">
          <div className="flex items-center justify-between -mx-gutter">
            <LogoWrapper
              dark={dark || this.state.open}
              open={this.state.open}
              fixed={this.state.fixed}
              className="px-gutter"
            >
              <Link to="/">
                <Logo />
              </Link>
            </LogoWrapper>

            <div className="px-gutter">
              <BurgerButton
                open={this.state.open}
                onClick={this.toggleOpen}
                fixed={this.state.fixed}
                dark={dark}
                role="button"
                tabIndex={0}
                onKeyDown={e =>
                  (e.key === 'Enter' || e.key === ' ') && this.toggleOpen()
                }
              >
                <span />
                <span />
                <span />
              </BurgerButton>

              {this.state.open && (
                <MobileMenu
                  dark={dark}
                  open={this.state.open}
                  fixed={this.state.fixed}
                >
                  {menu.map(({ children, name, href }) => (
                    <li key={href}>
                      {href === '#' ? (
                        <a>{name}</a>
                      ) : (
                        <Link to={href} activeClassName="link-active">
                          {name}
                        </Link>
                      )}

                      {Array.isArray(children) && (
                        <ul>
                          {children.map(({ name, href }) => (
                            <li key={href}>
                              {href.startsWith('http') ? (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {name}
                                </a>
                              ) : (
                                <Link to={href} activeClassName="link-active">
                                  {name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </MobileMenu>
              )}

              <nav className="hidden lg:block">
                <Menu dark={dark} fixed={this.state.fixed}>
                  {menu.map(({ children, name, href }) => (
                    <li
                      key={href}
                      className={classnames({
                        active: this.state.current === href
                      })}
                    >
                      <Link
                        to={href}
                        className={classnames({
                          'pointer-events-none': href === '#'
                        })}
                        activeClassName="link-active"
                        onClick={this.handleLinkClick(href)}
                      >
                        {name} {Array.isArray(children) && <FaCaretDown />}
                      </Link>

                      {Array.isArray(children) && (
                        <ul>
                          {children.map(({ name, href }) => (
                            <li key={href}>
                              {href.startsWith('http') ? (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {name}
                                </a>
                              ) : (
                                <Link to={href}>{name}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </Menu>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

Header.propTypes = {
  absolute: PropTypes.bool,
  dark: PropTypes.bool,
  onePage: PropTypes.bool
};

Header.defaultProps = {
  absolute: false,
  dark: false,
  onePage: false
};

export default Header;
