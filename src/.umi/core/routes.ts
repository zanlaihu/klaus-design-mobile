// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/huzanlai/Documents/GitHub/adw-design/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/gallery/:component",
    "component": require('/Users/huzanlai/Documents/GitHub/adw-design/.dumi/plugin-gallery/gallery.tsx').default
  },
  {
    "path": "/gallery",
    "component": require('/Users/huzanlai/Documents/GitHub/adw-design/.dumi/plugin-gallery/gallery.tsx').default
  },
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/huzanlai/Documents/GitHub/adw-design/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('/Users/huzanlai/Documents/GitHub/adw-design/.dumi/theme/builtins/Previewer.tsx');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/huzanlai/Documents/GitHub/adw-design/.dumi/theme/layouts/index.tsx').default],
    "routes": [
      {
        "path": "/404",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/404.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/404.en.md",
          "updatedTime": 1648516634173,
          "slugs": [],
          "locale": "en",
          "nav": {
            "path": "/404",
            "title": "404"
          },
          "title": "404"
        },
        "title": "404 - Ant Design Mobile"
      },
      {
        "path": "/zh/404",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/404.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/404.zh.md",
          "updatedTime": 1648516634173,
          "slugs": [],
          "locale": "zh",
          "nav": {
            "path": "/zh/404",
            "title": "404"
          },
          "title": "404"
        },
        "title": "404 - Ant Design Mobile"
      },
      {
        "path": "/",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.en.md",
          "updatedTime": 1648516634188,
          "title": "Ant Design Mobile",
          "full": true,
          "gapless": true,
          "slugs": [],
          "locale": "en"
        },
        "title": "Ant Design Mobile - Ant Design Mobile"
      },
      {
        "path": "/zh",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.zh.md",
          "updatedTime": 1648516634189,
          "title": "Ant Design Mobile",
          "full": true,
          "gapless": true,
          "slugs": [],
          "locale": "zh"
        },
        "title": "Ant Design Mobile - Ant Design Mobile"
      },
      {
        "path": "/components/icon",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/components/icon/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/icon/index.en.md",
          "updatedTime": 1648516634176,
          "slugs": [
            {
              "depth": 1,
              "value": "Icon",
              "heading": "icon"
            },
            {
              "depth": 2,
              "value": "Icon List",
              "heading": "icon-list"
            },
            {
              "depth": 2,
              "value": "Example",
              "heading": "example"
            }
          ],
          "title": "Icon",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/icon",
            "title": "Icon"
          }
        },
        "title": "Icon - Ant Design Mobile"
      },
      {
        "path": "/zh/components/icon",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/components/icon/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/icon/index.zh.md",
          "updatedTime": 1648516634177,
          "slugs": [
            {
              "depth": 1,
              "value": "Icon 图标",
              "heading": "icon-图标"
            },
            {
              "depth": 2,
              "value": "图标列表",
              "heading": "图标列表"
            },
            {
              "depth": 2,
              "value": "使用示例",
              "heading": "使用示例"
            }
          ],
          "title": "Icon 图标",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/icon",
            "title": "Icon"
          }
        },
        "title": "Icon 图标 - Ant Design Mobile"
      },
      {
        "path": "/guide/css-variables",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/css-variables.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/css-variables.en.md",
          "updatedTime": 1648516634177,
          "slugs": [
            {
              "depth": 1,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 3,
              "value": "Method 1: Set in the CSS file",
              "heading": "method-1-set-in-the-css-file"
            },
            {
              "depth": 3,
              "value": "Method 2: Set directly through the style attribute",
              "heading": "method-2-set-directly-through-the-style-attribute"
            },
            {
              "depth": 3,
              "value": "Method 3: Use the global variables",
              "heading": "method-3-use-the-global-variables"
            }
          ],
          "title": "CSS Variables",
          "locale": "en",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "CSS Variables - Ant Design Mobile"
      },
      {
        "path": "/zh/guide/css-variables",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/css-variables.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/css-variables.zh.md",
          "updatedTime": 1648516634178,
          "slugs": [
            {
              "depth": 1,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 3,
              "value": "方法一：在 CSS 文件中设置",
              "heading": "方法一在-css-文件中设置"
            },
            {
              "depth": 3,
              "value": "方法二：直接通过 style 属性设置",
              "heading": "方法二直接通过-style-属性设置"
            },
            {
              "depth": 3,
              "value": "方法三：通过全局变量进行设置",
              "heading": "方法三通过全局变量进行设置"
            }
          ],
          "title": "CSS 变量",
          "locale": "zh",
          "nav": {
            "path": "/zh/guide",
            "title": "Guide"
          }
        },
        "title": "CSS 变量 - Ant Design Mobile"
      },
      {
        "path": "/guide/faq",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/faq.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/faq.en.md",
          "updatedTime": 1648516634178,
          "slugs": [
            {
              "depth": 1,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Does it support mini program?",
              "heading": "does-it-support-mini-program"
            },
            {
              "depth": 3,
              "value": "Does it support React Native?",
              "heading": "does-it-support-react-native"
            },
            {
              "depth": 3,
              "value": "Why did you jump from v2 to v5? Where did v3 and v4 go?",
              "heading": "why-did-you-jump-from-v2-to-v5-where-did-v3-and-v4-go"
            },
            {
              "depth": 3,
              "value": "Should I start using the v5 version now?",
              "heading": "should-i-start-using-the-v5-version-now"
            },
            {
              "depth": 3,
              "value": "How to solve the error after installing antd-mobile v5 in the umi project?",
              "heading": "how-to-solve-the-error-after-installing-antd-mobile-v5-in-the-umi-project"
            },
            {
              "depth": 3,
              "value": "How do I migrate from v2 to v5?",
              "heading": "how-do-i-migrate-from-v2-to-v5"
            },
            {
              "depth": 3,
              "value": "How to avoid the 300ms delay of click?",
              "heading": "how-to-avoid-the-300ms-delay-of-click"
            },
            {
              "depth": 3,
              "value": "About React Hot Loader",
              "heading": "about-react-hot-loader"
            }
          ],
          "title": "FAQ",
          "locale": "en",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "FAQ - Ant Design Mobile"
      },
      {
        "path": "/zh/guide/faq",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/faq.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/faq.zh.md",
          "updatedTime": 1648516634178,
          "slugs": [
            {
              "depth": 1,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "支持小程序吗？",
              "heading": "支持小程序吗"
            },
            {
              "depth": 3,
              "value": "支持 React Native 吗？",
              "heading": "支持-react-native-吗"
            },
            {
              "depth": 3,
              "value": "为什么从 v2 直接跳跃到了 v5？v3 和 v4 跑到哪里去了？",
              "heading": "为什么从-v2-直接跳跃到了-v5v3-和-v4-跑到哪里去了"
            },
            {
              "depth": 3,
              "value": "我应该现在开始使用 v5 版本吗？",
              "heading": "我应该现在开始使用-v5-版本吗"
            },
            {
              "depth": 3,
              "value": "umi 项目安装 antd-mobile v5 后报错如何解决？",
              "heading": "umi-项目安装-antd-mobile-v5-后报错如何解决"
            },
            {
              "depth": 3,
              "value": "从 v2 如何迁移到 v5？",
              "heading": "从-v2-如何迁移到-v5"
            },
            {
              "depth": 3,
              "value": "如何避免 300ms 的点击延迟？",
              "heading": "如何避免-300ms-的点击延迟"
            },
            {
              "depth": 3,
              "value": "关于 React Hot Loader",
              "heading": "关于-react-hot-loader"
            }
          ],
          "title": "FAQ",
          "locale": "zh",
          "nav": {
            "path": "/zh/guide",
            "title": "Guide"
          }
        },
        "title": "FAQ - Ant Design Mobile"
      },
      {
        "path": "/guide/hd",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/hd.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/hd.en.md",
          "updatedTime": 1648516634179,
          "slugs": [
            {
              "depth": 1,
              "value": "HD Adaptation ",
              "heading": "hd-adaptation"
            }
          ],
          "title": "HD Adaptation ",
          "locale": "en",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "HD Adaptation  - Ant Design Mobile"
      },
      {
        "path": "/zh/guide/hd",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/hd.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/hd.zh.md",
          "updatedTime": 1648516634179,
          "slugs": [
            {
              "depth": 1,
              "value": "高清适配 ",
              "heading": "高清适配"
            }
          ],
          "title": "高清适配 ",
          "locale": "zh",
          "nav": {
            "path": "/zh/guide",
            "title": "Guide"
          }
        },
        "title": "高清适配  - Ant Design Mobile"
      },
      {
        "path": "/guide/i18n",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/i18n.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/i18n.en.md",
          "updatedTime": 1648516634180,
          "slugs": [
            {
              "depth": 1,
              "value": "Internationalization",
              "heading": "internationalization"
            },
            {
              "depth": 3,
              "value": "ConfigProvider",
              "heading": "configprovider"
            },
            {
              "depth": 3,
              "value": "Add new language",
              "heading": "add-new-language"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Why the ConfigProvider not work when component used in an imperative way?",
              "heading": "why-the-configprovider-not-work-when-component-used-in-an-imperative-way"
            }
          ],
          "title": "Internationalization",
          "locale": "en",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Internationalization - Ant Design Mobile"
      },
      {
        "path": "/zh/guide/i18n",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/i18n.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/i18n.zh.md",
          "updatedTime": 1648516634180,
          "slugs": [
            {
              "depth": 1,
              "value": "国际化",
              "heading": "国际化"
            },
            {
              "depth": 3,
              "value": "ConfigProvider",
              "heading": "configprovider"
            },
            {
              "depth": 3,
              "value": "增加语言包",
              "heading": "增加语言包"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "为什么组件指令式的调用不支持 ConfigProvider？",
              "heading": "为什么组件指令式的调用不支持-configprovider"
            }
          ],
          "title": "国际化",
          "locale": "zh",
          "nav": {
            "path": "/zh/guide",
            "title": "Guide"
          }
        },
        "title": "国际化 - Ant Design Mobile"
      },
      {
        "path": "/guide/import-on-demand",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/import-on-demand.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/import-on-demand.en.md",
          "updatedTime": 1648516634181,
          "slugs": [
            {
              "depth": 1,
              "value": "Import On Demand",
              "heading": "import-on-demand"
            },
            {
              "depth": 2,
              "value": "Import On Demand Manually",
              "heading": "import-on-demand-manually"
            }
          ],
          "title": "Import On Demand",
          "locale": "en",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Import On Demand - Ant Design Mobile"
      },
      {
        "path": "/zh/guide/import-on-demand",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/import-on-demand.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/import-on-demand.zh.md",
          "updatedTime": 1648516634181,
          "slugs": [
            {
              "depth": 1,
              "value": "按需加载",
              "heading": "按需加载"
            },
            {
              "depth": 2,
              "value": "手动的按需加载",
              "heading": "手动的按需加载"
            }
          ],
          "title": "按需加载",
          "locale": "zh",
          "nav": {
            "path": "/zh/guide",
            "title": "Guide"
          }
        },
        "title": "按需加载 - Ant Design Mobile"
      },
      {
        "path": "/guide/migration",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/migration.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/migration.en.md",
          "updatedTime": 1648516634182,
          "slugs": [
            {
              "depth": 1,
              "value": "Migrating from v2",
              "heading": "migrating-from-v2"
            },
            {
              "depth": 2,
              "value": "Method 1: Use antd-mobile-v2 (Recommended)",
              "heading": "method-1-use-antd-mobile-v2-recommended"
            },
            {
              "depth": 2,
              "value": "Method 2: Install v5 via alias",
              "heading": "method-2-install-v5-via-alias"
            }
          ],
          "title": "Migrating from v2",
          "locale": "en",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Migrating from v2 - Ant Design Mobile"
      },
      {
        "path": "/zh/guide/migration",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/migration.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/migration.zh.md",
          "updatedTime": 1648516634182,
          "slugs": [
            {
              "depth": 1,
              "value": "从 v2 迁移",
              "heading": "从-v2-迁移"
            },
            {
              "depth": 2,
              "value": "方法一：使用 antd-mobile-v2（推荐）",
              "heading": "方法一使用-antd-mobile-v2推荐"
            },
            {
              "depth": 2,
              "value": "方法二：通过别名安装 v5",
              "heading": "方法二通过别名安装-v5"
            }
          ],
          "title": "从 v2 迁移",
          "locale": "zh",
          "nav": {
            "path": "/zh/guide",
            "title": "Guide"
          }
        },
        "title": "从 v2 迁移 - Ant Design Mobile"
      },
      {
        "path": "/guide/quick-start",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/quick-start.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/quick-start.en.md",
          "updatedTime": 1648516634183,
          "slugs": [
            {
              "depth": 1,
              "value": "Quick Start",
              "heading": "quick-start"
            },
            {
              "depth": 2,
              "value": "Installation",
              "heading": "installation"
            },
            {
              "depth": 2,
              "value": "Import",
              "heading": "import"
            },
            {
              "depth": 2,
              "value": "Compatibility",
              "heading": "compatibility"
            },
            {
              "depth": 2,
              "value": "Playground",
              "heading": "playground"
            },
            {
              "depth": 2,
              "value": "Discussion Groups",
              "heading": "discussion-groups"
            }
          ],
          "title": "Quick Start",
          "locale": "en",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Quick Start - Ant Design Mobile"
      },
      {
        "path": "/zh/guide/quick-start",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/quick-start.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/quick-start.zh.md",
          "updatedTime": 1648516634184,
          "slugs": [
            {
              "depth": 1,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "引入",
              "heading": "引入"
            },
            {
              "depth": 2,
              "value": "兼容性",
              "heading": "兼容性"
            },
            {
              "depth": 2,
              "value": "在线体验",
              "heading": "在线体验"
            },
            {
              "depth": 2,
              "value": "讨论组",
              "heading": "讨论组"
            }
          ],
          "title": "快速上手",
          "locale": "zh",
          "nav": {
            "path": "/zh/guide",
            "title": "Guide"
          }
        },
        "title": "快速上手 - Ant Design Mobile"
      },
      {
        "path": "/guide/ssr",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/ssr.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/ssr.en.md",
          "updatedTime": 1648516634184,
          "slugs": [
            {
              "depth": 1,
              "value": "Server-side Rendering / SSR ",
              "heading": "server-side-rendering--ssr"
            },
            {
              "depth": 2,
              "value": "Next.js",
              "heading": "nextjs"
            }
          ],
          "title": "Server-side Rendering / SSR ",
          "locale": "en",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Server-side Rendering / SSR  - Ant Design Mobile"
      },
      {
        "path": "/zh/guide/ssr",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/ssr.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/ssr.zh.md",
          "updatedTime": 1648516634185,
          "slugs": [
            {
              "depth": 1,
              "value": "服务端渲染 / SSR ",
              "heading": "服务端渲染--ssr"
            },
            {
              "depth": 2,
              "value": "Next.js",
              "heading": "nextjs"
            }
          ],
          "title": "服务端渲染 / SSR ",
          "locale": "zh",
          "nav": {
            "path": "/zh/guide",
            "title": "Guide"
          }
        },
        "title": "服务端渲染 / SSR  - Ant Design Mobile"
      },
      {
        "path": "/guide/theming",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/theming.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/theming.en.md",
          "updatedTime": 1648516634186,
          "slugs": [
            {
              "depth": 1,
              "value": "Theming",
              "heading": "theming"
            }
          ],
          "title": "Theming",
          "locale": "en",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Theming - Ant Design Mobile"
      },
      {
        "path": "/zh/guide/theming",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/theming.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/theming.zh.md",
          "updatedTime": 1648516634186,
          "slugs": [
            {
              "depth": 1,
              "value": "主题",
              "heading": "主题"
            }
          ],
          "title": "主题",
          "locale": "zh",
          "nav": {
            "path": "/zh/guide",
            "title": "Guide"
          }
        },
        "title": "主题 - Ant Design Mobile"
      },
      {
        "path": "/guide/what-is-experimental",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/what-is-experimental.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/what-is-experimental.en.md",
          "updatedTime": 1648516634187,
          "slugs": [
            {
              "depth": 1,
              "value": "what is experimental",
              "heading": "what-is-experimental"
            }
          ],
          "title": "what is experimental",
          "locale": "en",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "what is experimental - Ant Design Mobile"
      },
      {
        "path": "/zh/guide/what-is-experimental",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/guide/what-is-experimental.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/what-is-experimental.zh.md",
          "updatedTime": 1648516634187,
          "slugs": [
            {
              "depth": 1,
              "value": "什么是试验性",
              "heading": "什么是试验性"
            }
          ],
          "title": "什么是试验性",
          "locale": "zh",
          "nav": {
            "path": "/zh/guide",
            "title": "Guide"
          }
        },
        "title": "什么是试验性 - Ant Design Mobile"
      },
      {
        "path": "/components/action-sheet",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/action-sheet/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/action-sheet/index.en.md",
          "updatedTime": 1648516636207,
          "slugs": [
            {
              "depth": 1,
              "value": "ActionSheet",
              "heading": "actionsheet"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Action",
              "heading": "action"
            },
            {
              "depth": 3,
              "value": "Imperative",
              "heading": "imperative"
            }
          ],
          "title": "ActionSheet",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/action-sheet",
            "title": "Action-sheet"
          }
        },
        "title": "ActionSheet - Ant Design Mobile"
      },
      {
        "path": "/zh/components/action-sheet",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/action-sheet/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/action-sheet/index.zh.md",
          "updatedTime": 1648516636207,
          "slugs": [
            {
              "depth": 1,
              "value": "ActionSheet 动作面板",
              "heading": "actionsheet-动作面板"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Action",
              "heading": "action"
            },
            {
              "depth": 3,
              "value": "指令式",
              "heading": "指令式"
            }
          ],
          "title": "ActionSheet 动作面板",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/action-sheet",
            "title": "Action-sheet"
          }
        },
        "title": "ActionSheet 动作面板 - Ant Design Mobile"
      },
      {
        "path": "/components/auto-center",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/auto-center/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/auto-center/index.en.md",
          "updatedTime": 1648516636210,
          "componentName": "auto-center",
          "slugs": [
            {
              "depth": 1,
              "value": "AutoCenter",
              "heading": "autocenter"
            }
          ],
          "title": "AutoCenter",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/auto-center",
            "title": "Auto-center"
          }
        },
        "title": "AutoCenter - Ant Design Mobile"
      },
      {
        "path": "/zh/components/auto-center",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/auto-center/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/auto-center/index.zh.md",
          "updatedTime": 1648516636211,
          "componentName": "auto-center",
          "slugs": [
            {
              "depth": 1,
              "value": "AutoCenter 自动居中",
              "heading": "autocenter-自动居中"
            }
          ],
          "title": "AutoCenter 自动居中",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/auto-center",
            "title": "Auto-center"
          }
        },
        "title": "AutoCenter 自动居中 - Ant Design Mobile"
      },
      {
        "path": "/components/avatar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/avatar/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/avatar/index.en.md",
          "updatedTime": 1648516636214,
          "slugs": [
            {
              "depth": 1,
              "value": "Avatar",
              "heading": "avatar"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Avatar",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/avatar",
            "title": "Avatar"
          }
        },
        "title": "Avatar - Ant Design Mobile"
      },
      {
        "path": "/zh/components/avatar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/avatar/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/avatar/index.zh.md",
          "updatedTime": 1648516636215,
          "slugs": [
            {
              "depth": 1,
              "value": "Avatar 头像",
              "heading": "avatar-头像"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Avatar 头像",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/avatar",
            "title": "Avatar"
          }
        },
        "title": "Avatar 头像 - Ant Design Mobile"
      },
      {
        "path": "/components/badge",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/badge/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/badge/index.en.md",
          "updatedTime": 1648516636219,
          "slugs": [
            {
              "depth": 1,
              "value": "Badge",
              "heading": "badge"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Badge",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/badge",
            "title": "Badge"
          }
        },
        "title": "Badge - Ant Design Mobile"
      },
      {
        "path": "/zh/components/badge",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/badge/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/badge/index.zh.md",
          "updatedTime": 1648516636220,
          "slugs": [
            {
              "depth": 1,
              "value": "Badge 徽标",
              "heading": "badge-徽标"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Badge 徽标",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/badge",
            "title": "Badge"
          }
        },
        "title": "Badge 徽标 - Ant Design Mobile"
      },
      {
        "path": "/components/button",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/button/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/button/index.en.md",
          "updatedTime": 1648516636225,
          "slugs": [
            {
              "depth": 1,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Button",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/button",
            "title": "Button"
          }
        },
        "title": "Button - Ant Design Mobile"
      },
      {
        "path": "/zh/components/button",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/button/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/button/index.zh.md",
          "updatedTime": 1648516636226,
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Button 按钮",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/button",
            "title": "Button"
          }
        },
        "title": "Button 按钮 - Ant Design Mobile"
      },
      {
        "path": "/components/calendar/calendar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/calendar/calendar.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/calendar/calendar.en.md",
          "updatedTime": 1648516636231,
          "slugs": [
            {
              "depth": 1,
              "value": "Calendar ",
              "heading": "calendar"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            }
          ],
          "title": "Calendar ",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/calendar",
            "title": "Calendar"
          }
        },
        "title": "Calendar  - Ant Design Mobile"
      },
      {
        "path": "/zh/components/calendar/calendar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/calendar/calendar.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/calendar/calendar.zh.md",
          "updatedTime": 1648516636233,
          "slugs": [
            {
              "depth": 1,
              "value": "Calendar 日历 ",
              "heading": "calendar-日历"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            }
          ],
          "title": "Calendar 日历 ",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/calendar",
            "title": "Calendar"
          }
        },
        "title": "Calendar 日历  - Ant Design Mobile"
      },
      {
        "path": "/components/capsule-tabs",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/capsule-tabs/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/capsule-tabs/index.en.md",
          "updatedTime": 1648516636239,
          "slugs": [
            {
              "depth": 1,
              "value": "CapsuleTabs",
              "heading": "capsuletabs"
            },
            {
              "depth": 2,
              "value": "CapsuleTabs",
              "heading": "capsuletabs-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "CapsuleTabs.Tab",
              "heading": "capsuletabstab"
            }
          ],
          "title": "CapsuleTabs",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/capsule-tabs",
            "title": "Capsule-tabs"
          }
        },
        "title": "CapsuleTabs - Ant Design Mobile"
      },
      {
        "path": "/zh/components/capsule-tabs",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/capsule-tabs/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/capsule-tabs/index.zh.md",
          "updatedTime": 1648516636240,
          "slugs": [
            {
              "depth": 1,
              "value": "CapsuleTabs 胶囊选项卡",
              "heading": "capsuletabs-胶囊选项卡"
            },
            {
              "depth": 2,
              "value": "CapsuleTabs",
              "heading": "capsuletabs"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 2,
              "value": "CapsuleTabs.Tab",
              "heading": "capsuletabstab"
            }
          ],
          "title": "CapsuleTabs 胶囊选项卡",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/capsule-tabs",
            "title": "Capsule-tabs"
          }
        },
        "title": "CapsuleTabs 胶囊选项卡 - Ant Design Mobile"
      },
      {
        "path": "/components/card",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/card/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/card/index.en.md",
          "updatedTime": 1648516636244,
          "slugs": [
            {
              "depth": 1,
              "value": "Card",
              "heading": "card"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            }
          ],
          "title": "Card",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/card",
            "title": "Card"
          }
        },
        "title": "Card - Ant Design Mobile"
      },
      {
        "path": "/zh/components/card",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/card/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/card/index.zh.md",
          "updatedTime": 1648516636245,
          "slugs": [
            {
              "depth": 1,
              "value": "Card 卡片",
              "heading": "card-卡片"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            }
          ],
          "title": "Card 卡片",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/card",
            "title": "Card"
          }
        },
        "title": "Card 卡片 - Ant Design Mobile"
      },
      {
        "path": "/components/cascader",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/cascader/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/cascader/index.en.md",
          "updatedTime": 1648516636259,
          "slugs": [
            {
              "depth": 1,
              "value": "Cascader",
              "heading": "cascader"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Loading ",
              "heading": "loading"
            }
          ],
          "title": "Cascader",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/cascader",
            "title": "Cascader"
          }
        },
        "title": "Cascader - Ant Design Mobile"
      },
      {
        "path": "/zh/components/cascader",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/cascader/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/cascader/index.zh.md",
          "updatedTime": 1648516636260,
          "slugs": [
            {
              "depth": 1,
              "value": "Cascader 级联选择",
              "heading": "cascader-级联选择"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "加载中 ",
              "heading": "加载中"
            }
          ],
          "title": "Cascader 级联选择",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/cascader",
            "title": "Cascader"
          }
        },
        "title": "Cascader 级联选择 - Ant Design Mobile"
      },
      {
        "path": "/components/cascader-view",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/cascader-view/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/cascader-view/index.en.md",
          "updatedTime": 1648516636265,
          "slugs": [
            {
              "depth": 1,
              "value": "CascaderView",
              "heading": "cascaderview"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Loading ",
              "heading": "loading"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "CascaderView",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/cascader-view",
            "title": "Cascader-view"
          }
        },
        "title": "CascaderView - Ant Design Mobile"
      },
      {
        "path": "/zh/components/cascader-view",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/cascader-view/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/cascader-view/index.zh.md",
          "updatedTime": 1648516636266,
          "slugs": [
            {
              "depth": 1,
              "value": "CascaderView 级联选择视图",
              "heading": "cascaderview-级联选择视图"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "加载中 ",
              "heading": "加载中"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "CascaderView 级联选择视图",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/cascader-view",
            "title": "Cascader-view"
          }
        },
        "title": "CascaderView 级联选择视图 - Ant Design Mobile"
      },
      {
        "path": "/components/check-list",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/check-list/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/check-list/index.en.md",
          "updatedTime": 1648516636273,
          "componentName": "check-list",
          "slugs": [
            {
              "depth": 1,
              "value": "CheckList",
              "heading": "checklist"
            },
            {
              "depth": 2,
              "value": "CheckList",
              "heading": "checklist-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "CheckList.Item",
              "heading": "checklistitem"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables-1"
            }
          ],
          "title": "CheckList",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/check-list",
            "title": "Check-list"
          }
        },
        "title": "CheckList - Ant Design Mobile"
      },
      {
        "path": "/zh/components/check-list",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/check-list/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/check-list/index.zh.md",
          "updatedTime": 1648516636274,
          "componentName": "check-list",
          "slugs": [
            {
              "depth": 1,
              "value": "CheckList 可勾选列表",
              "heading": "checklist-可勾选列表"
            },
            {
              "depth": 2,
              "value": "CheckList",
              "heading": "checklist"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "CheckList.Item",
              "heading": "checklistitem"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量-1"
            }
          ],
          "title": "CheckList 可勾选列表",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/check-list",
            "title": "Check-list"
          }
        },
        "title": "CheckList 可勾选列表 - Ant Design Mobile"
      },
      {
        "path": "/components/checkbox",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/checkbox/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/checkbox/index.en.md",
          "updatedTime": 1648516636280,
          "slugs": [
            {
              "depth": 1,
              "value": "Checkbox",
              "heading": "checkbox"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Checkbox",
              "heading": "checkbox-1"
            },
            {
              "depth": 3,
              "value": "Checkbox.Group",
              "heading": "checkboxgroup"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 3,
              "value": "Checkbox",
              "heading": "checkbox-2"
            }
          ],
          "title": "Checkbox",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/checkbox",
            "title": "Checkbox"
          }
        },
        "title": "Checkbox - Ant Design Mobile"
      },
      {
        "path": "/zh/components/checkbox",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/checkbox/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/checkbox/index.zh.md",
          "updatedTime": 1648516636281,
          "slugs": [
            {
              "depth": 1,
              "value": "Checkbox 复选框",
              "heading": "checkbox-复选框"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Checkbox",
              "heading": "checkbox"
            },
            {
              "depth": 3,
              "value": "Checkbox.Group",
              "heading": "checkboxgroup"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 3,
              "value": "Checkbox",
              "heading": "checkbox-1"
            }
          ],
          "title": "Checkbox 复选框",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/checkbox",
            "title": "Checkbox"
          }
        },
        "title": "Checkbox 复选框 - Ant Design Mobile"
      },
      {
        "path": "/components/collapse",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/collapse/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/collapse/index.en.md",
          "updatedTime": 1648516636287,
          "slugs": [
            {
              "depth": 1,
              "value": "Collapse",
              "heading": "collapse"
            },
            {
              "depth": 2,
              "value": "Collapse",
              "heading": "collapse-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "Collapse.Panel",
              "heading": "collapsepanel"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            }
          ],
          "title": "Collapse",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/collapse",
            "title": "Collapse"
          }
        },
        "title": "Collapse - Ant Design Mobile"
      },
      {
        "path": "/zh/components/collapse",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/collapse/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/collapse/index.zh.md",
          "updatedTime": 1648516636288,
          "slugs": [
            {
              "depth": 1,
              "value": "Collapse 折叠面板",
              "heading": "collapse-折叠面板"
            },
            {
              "depth": 2,
              "value": "Collapse",
              "heading": "collapse"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 2,
              "value": "Collapse.Panel",
              "heading": "collapsepanel"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            }
          ],
          "title": "Collapse 折叠面板",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/collapse",
            "title": "Collapse"
          }
        },
        "title": "Collapse 折叠面板 - Ant Design Mobile"
      },
      {
        "path": "/components/config-provider",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/config-provider/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/config-provider/index.en.md",
          "updatedTime": 1648516636292,
          "componentName": "config-provider",
          "slugs": [
            {
              "depth": 1,
              "value": "ConfigProvider",
              "heading": "configprovider"
            }
          ],
          "title": "ConfigProvider",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/config-provider",
            "title": "Config-provider"
          }
        },
        "title": "ConfigProvider - Ant Design Mobile"
      },
      {
        "path": "/zh/components/config-provider",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/config-provider/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/config-provider/index.zh.md",
          "updatedTime": 1648516636293,
          "componentName": "config-provider",
          "slugs": [
            {
              "depth": 1,
              "value": "ConfigProvider 配置",
              "heading": "configprovider-配置"
            }
          ],
          "title": "ConfigProvider 配置",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/config-provider",
            "title": "Config-provider"
          }
        },
        "title": "ConfigProvider 配置 - Ant Design Mobile"
      },
      {
        "path": "/components/dialog",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/dialog/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/dialog/index.en.md",
          "updatedTime": 1648516636312,
          "slugs": [
            {
              "depth": 1,
              "value": "Dialog 弹窗",
              "heading": "dialog-弹窗"
            },
            {
              "depth": 3,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Dialog 弹窗",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/dialog",
            "title": "Dialog"
          }
        },
        "title": "Dialog 弹窗 - Ant Design Mobile"
      },
      {
        "path": "/zh/components/dialog",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/dialog/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/dialog/index.zh.md",
          "updatedTime": 1648516636313,
          "slugs": [
            {
              "depth": 1,
              "value": "Dialog 弹窗",
              "heading": "dialog-弹窗"
            },
            {
              "depth": 3,
              "value": "props 属性",
              "heading": "props-属性"
            },
            {
              "depth": 2,
              "value": "CSS Variables 样式",
              "heading": "css-variables-样式"
            }
          ],
          "title": "Dialog 弹窗",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/dialog",
            "title": "Dialog"
          }
        },
        "title": "Dialog 弹窗 - Ant Design Mobile"
      },
      {
        "path": "/components/divider",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/divider/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/divider/index.en.md",
          "updatedTime": 1648516636319,
          "slugs": [
            {
              "depth": 1,
              "value": "Divider",
              "heading": "divider"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            }
          ],
          "title": "Divider",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/divider",
            "title": "Divider"
          }
        },
        "title": "Divider - Ant Design Mobile"
      },
      {
        "path": "/zh/components/divider",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/divider/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/divider/index.zh.md",
          "updatedTime": 1648516636320,
          "slugs": [
            {
              "depth": 1,
              "value": "Divider 分割线",
              "heading": "divider-分割线"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            }
          ],
          "title": "Divider 分割线",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/divider",
            "title": "Divider"
          }
        },
        "title": "Divider 分割线 - Ant Design Mobile"
      },
      {
        "path": "/components/drawer",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/drawer/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/drawer/index.en.md",
          "updatedTime": 1648516636327,
          "slugs": [
            {
              "depth": 1,
              "value": "Drawer",
              "heading": "drawer"
            },
            {
              "depth": 3,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Drawer",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/drawer",
            "title": "Drawer"
          }
        },
        "title": "Drawer - Ant Design Mobile"
      },
      {
        "path": "/zh/components/drawer",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/drawer/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/drawer/index.zh.md",
          "updatedTime": 1648516636328,
          "slugs": [
            {
              "depth": 1,
              "value": "Drawer 抽屉",
              "heading": "drawer-抽屉"
            },
            {
              "depth": 3,
              "value": "props 属性",
              "heading": "props-属性"
            },
            {
              "depth": 2,
              "value": "CSS Variables 样式",
              "heading": "css-variables-样式"
            }
          ],
          "title": "Drawer 抽屉",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/drawer",
            "title": "Drawer"
          }
        },
        "title": "Drawer 抽屉 - Ant Design Mobile"
      },
      {
        "path": "/components/dropdown",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/dropdown/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/dropdown/index.en.md",
          "updatedTime": 1648516636335,
          "slugs": [
            {
              "depth": 1,
              "value": "Dropdown ",
              "heading": "dropdown"
            },
            {
              "depth": 2,
              "value": "Dropdown",
              "heading": "dropdown-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 2,
              "value": "Dropdown.Item",
              "heading": "dropdownitem"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            }
          ],
          "title": "Dropdown ",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/dropdown",
            "title": "Dropdown"
          }
        },
        "title": "Dropdown  - Ant Design Mobile"
      },
      {
        "path": "/zh/components/dropdown",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/dropdown/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/dropdown/index.zh.md",
          "updatedTime": 1648516636336,
          "slugs": [
            {
              "depth": 1,
              "value": "Dropdown 下拉菜单 ",
              "heading": "dropdown-下拉菜单"
            },
            {
              "depth": 2,
              "value": "Dropdown",
              "heading": "dropdown"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 2,
              "value": "Dropdown.Item",
              "heading": "dropdownitem"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            }
          ],
          "title": "Dropdown 下拉菜单 ",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/dropdown",
            "title": "Dropdown"
          }
        },
        "title": "Dropdown 下拉菜单  - Ant Design Mobile"
      },
      {
        "path": "/components/ellipsis",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/ellipsis/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/ellipsis/index.en.md",
          "updatedTime": 1648516636340,
          "slugs": [
            {
              "depth": 1,
              "value": "Ellipsis ",
              "heading": "ellipsis"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            }
          ],
          "title": "Ellipsis ",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/ellipsis",
            "title": "Ellipsis"
          }
        },
        "title": "Ellipsis  - Ant Design Mobile"
      },
      {
        "path": "/zh/components/ellipsis",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/ellipsis/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/ellipsis/index.zh.md",
          "updatedTime": 1648516636342,
          "slugs": [
            {
              "depth": 1,
              "value": "Ellipsis 文本省略 ",
              "heading": "ellipsis-文本省略"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            }
          ],
          "title": "Ellipsis 文本省略 ",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/ellipsis",
            "title": "Ellipsis"
          }
        },
        "title": "Ellipsis 文本省略  - Ant Design Mobile"
      },
      {
        "path": "/components/empty",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/empty/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/empty/index.en.md",
          "updatedTime": 1648516636346,
          "slugs": [
            {
              "depth": 1,
              "value": "Empty",
              "heading": "empty"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            }
          ],
          "title": "Empty",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/empty",
            "title": "Empty"
          }
        },
        "title": "Empty - Ant Design Mobile"
      },
      {
        "path": "/zh/components/empty",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/empty/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/empty/index.zh.md",
          "updatedTime": 1648516636347,
          "slugs": [
            {
              "depth": 1,
              "value": "Empty 空状态",
              "heading": "empty-空状态"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            }
          ],
          "title": "Empty 空状态",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/empty",
            "title": "Empty"
          }
        },
        "title": "Empty 空状态 - Ant Design Mobile"
      },
      {
        "path": "/components/error-block",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/error-block/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/error-block/index.en.md",
          "updatedTime": 1648516636356,
          "slugs": [
            {
              "depth": 1,
              "value": "ErrorBlock",
              "heading": "errorblock"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "ErrorBlock",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/error-block",
            "title": "Error-block"
          }
        },
        "title": "ErrorBlock - Ant Design Mobile"
      },
      {
        "path": "/zh/components/error-block",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/error-block/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/error-block/index.zh.md",
          "updatedTime": 1648516636357,
          "slugs": [
            {
              "depth": 1,
              "value": "ErrorBlock 异常",
              "heading": "errorblock-异常"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "ErrorBlock 异常",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/error-block",
            "title": "Error-block"
          }
        },
        "title": "ErrorBlock 异常 - Ant Design Mobile"
      },
      {
        "path": "/components/floating-bubble",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/floating-bubble/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/floating-bubble/index.en.md",
          "updatedTime": 1648516636363,
          "slugs": [
            {
              "depth": 1,
              "value": "FloatingBubble ",
              "heading": "floatingbubble"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "FloatingBubble ",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/floating-bubble",
            "title": "Floating-bubble"
          }
        },
        "title": "FloatingBubble  - Ant Design Mobile"
      },
      {
        "path": "/zh/components/floating-bubble",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/floating-bubble/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/floating-bubble/index.zh.md",
          "updatedTime": 1648516636364,
          "slugs": [
            {
              "depth": 1,
              "value": "FloatingBubble 浮动气泡 ",
              "heading": "floatingbubble-浮动气泡"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "FloatingBubble 浮动气泡 ",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/floating-bubble",
            "title": "Floating-bubble"
          }
        },
        "title": "FloatingBubble 浮动气泡  - Ant Design Mobile"
      },
      {
        "path": "/components/floating-panel",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/floating-panel/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/floating-panel/index.en.md",
          "updatedTime": 1648516636367,
          "slugs": [
            {
              "depth": 1,
              "value": "FloatingPanel",
              "heading": "floatingpanel"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "FloatingPanel",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/floating-panel",
            "title": "Floating-panel"
          }
        },
        "title": "FloatingPanel - Ant Design Mobile"
      },
      {
        "path": "/zh/components/floating-panel",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/floating-panel/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/floating-panel/index.zh.md",
          "updatedTime": 1648516636368,
          "slugs": [
            {
              "depth": 1,
              "value": "FloatingPanel 浮动面板",
              "heading": "floatingpanel-浮动面板"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "FloatingPanel 浮动面板",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/floating-panel",
            "title": "Floating-panel"
          }
        },
        "title": "FloatingPanel 浮动面板 - Ant Design Mobile"
      },
      {
        "path": "/components/form",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/form/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/form/index.en.md",
          "updatedTime": 1648516636378,
          "componentName": "form",
          "slugs": [
            {
              "depth": 1,
              "value": "Form",
              "heading": "form"
            },
            {
              "depth": 2,
              "value": "Form",
              "heading": "form-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "FormInstance",
              "heading": "forminstance"
            },
            {
              "depth": 3,
              "value": "validateMessages",
              "heading": "validatemessages"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "Form.Item",
              "heading": "formitem"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            },
            {
              "depth": 3,
              "value": "dependencies",
              "heading": "dependencies"
            },
            {
              "depth": 3,
              "value": "shouldUpdate",
              "heading": "shouldupdate"
            },
            {
              "depth": 3,
              "value": "messageVariables",
              "heading": "messagevariables"
            },
            {
              "depth": 2,
              "value": "Custom field",
              "heading": "custom-field"
            },
            {
              "depth": 2,
              "value": "Form.Header",
              "heading": "formheader"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-2"
            },
            {
              "depth": 2,
              "value": "Form.Subscribe",
              "heading": "formsubscribe"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-3"
            },
            {
              "depth": 3,
              "value": "Demo",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "Form.Array ",
              "heading": "formarray"
            },
            {
              "depth": 3,
              "value": "FormArrayField",
              "heading": "formarrayfield"
            },
            {
              "depth": 3,
              "value": "FormArrayOperation",
              "heading": "formarrayoperation"
            },
            {
              "depth": 3,
              "value": "Demo",
              "heading": "demo-1"
            },
            {
              "depth": 2,
              "value": "Some Common Type Definitions",
              "heading": "some-common-type-definitions"
            },
            {
              "depth": 3,
              "value": "NamePath",
              "heading": "namepath"
            },
            {
              "depth": 3,
              "value": "FieldData",
              "heading": "fielddata"
            },
            {
              "depth": 3,
              "value": "Rule",
              "heading": "rule"
            }
          ],
          "title": "Form",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/form",
            "title": "Form"
          }
        },
        "title": "Form - Ant Design Mobile"
      },
      {
        "path": "/zh/components/form",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/form/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/form/index.zh.md",
          "updatedTime": 1648516636379,
          "componentName": "form",
          "slugs": [
            {
              "depth": 1,
              "value": "Form 表单",
              "heading": "form-表单"
            },
            {
              "depth": 2,
              "value": "Form",
              "heading": "form"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "FormInstance",
              "heading": "forminstance"
            },
            {
              "depth": 3,
              "value": "validateMessages",
              "heading": "validatemessages"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "Form.Item",
              "heading": "formitem"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            },
            {
              "depth": 3,
              "value": "dependencies",
              "heading": "dependencies"
            },
            {
              "depth": 3,
              "value": "shouldUpdate",
              "heading": "shouldupdate"
            },
            {
              "depth": 3,
              "value": "messageVariables",
              "heading": "messagevariables"
            },
            {
              "depth": 2,
              "value": "自定义表单字段",
              "heading": "自定义表单字段"
            },
            {
              "depth": 2,
              "value": "Form.Header",
              "heading": "formheader"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-2"
            },
            {
              "depth": 2,
              "value": "Form.Subscribe",
              "heading": "formsubscribe"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-3"
            },
            {
              "depth": 3,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "Form.Array ",
              "heading": "formarray"
            },
            {
              "depth": 3,
              "value": "FormArrayField",
              "heading": "formarrayfield"
            },
            {
              "depth": 3,
              "value": "FormArrayOperation",
              "heading": "formarrayoperation"
            },
            {
              "depth": 3,
              "value": "示例",
              "heading": "示例-1"
            },
            {
              "depth": 2,
              "value": "一些通用的类型定义",
              "heading": "一些通用的类型定义"
            },
            {
              "depth": 3,
              "value": "NamePath",
              "heading": "namepath"
            },
            {
              "depth": 3,
              "value": "FieldData",
              "heading": "fielddata"
            },
            {
              "depth": 3,
              "value": "Rule",
              "heading": "rule"
            }
          ],
          "title": "Form 表单",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/form",
            "title": "Form"
          }
        },
        "title": "Form 表单 - Ant Design Mobile"
      },
      {
        "path": "/components/grid",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/grid/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/grid/index.en.md",
          "updatedTime": 1648516636386,
          "slugs": [
            {
              "depth": 1,
              "value": "Grid",
              "heading": "grid"
            },
            {
              "depth": 2,
              "value": "Grid",
              "heading": "grid-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "Grid.Item",
              "heading": "griditem"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            }
          ],
          "title": "Grid",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/grid",
            "title": "Grid"
          }
        },
        "title": "Grid - Ant Design Mobile"
      },
      {
        "path": "/zh/components/grid",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/grid/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/grid/index.zh.md",
          "updatedTime": 1648516636387,
          "slugs": [
            {
              "depth": 1,
              "value": "Grid 栅格",
              "heading": "grid-栅格"
            },
            {
              "depth": 2,
              "value": "Grid",
              "heading": "grid"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "Grid.Item",
              "heading": "griditem"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Grid 组件的兼容性说明",
              "heading": "grid-组件的兼容性说明"
            }
          ],
          "title": "Grid 栅格",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/grid",
            "title": "Grid"
          }
        },
        "title": "Grid 栅格 - Ant Design Mobile"
      },
      {
        "path": "/components/image",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/image/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/image/index.en.md",
          "updatedTime": 1648516636392,
          "slugs": [
            {
              "depth": 1,
              "value": "Image",
              "heading": "image"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "How to make Image change from block element to inline-block element?",
              "heading": "how-to-make-image-change-from-block-element-to-inline-block-element"
            }
          ],
          "title": "Image",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/image",
            "title": "Image"
          }
        },
        "title": "Image - Ant Design Mobile"
      },
      {
        "path": "/zh/components/image",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/image/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/image/index.zh.md",
          "updatedTime": 1648516636393,
          "slugs": [
            {
              "depth": 1,
              "value": "Image 图片",
              "heading": "image-图片"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "如何让 Image 从 block 元素变为 inline-block 元素？",
              "heading": "如何让-image-从-block-元素变为-inline-block-元素"
            }
          ],
          "title": "Image 图片",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/image",
            "title": "Image"
          }
        },
        "title": "Image 图片 - Ant Design Mobile"
      },
      {
        "path": "/components/image-uploader",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/image-uploader/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/image-uploader/index.en.md",
          "updatedTime": 1648516636398,
          "slugs": [
            {
              "depth": 1,
              "value": "ImageUploader ",
              "heading": "imageuploader"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "ImageUploadItem",
              "heading": "imageuploaditem"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "ImageUploader ",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/image-uploader",
            "title": "Image-uploader"
          }
        },
        "title": "ImageUploader  - Ant Design Mobile"
      },
      {
        "path": "/zh/components/image-uploader",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/image-uploader/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/image-uploader/index.zh.md",
          "updatedTime": 1648516636400,
          "slugs": [
            {
              "depth": 1,
              "value": "ImageUploader 图片上传 ",
              "heading": "imageuploader-图片上传"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "ImageUploadItem",
              "heading": "imageuploaditem"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "ImageUploader 图片上传 ",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/image-uploader",
            "title": "Image-uploader"
          }
        },
        "title": "ImageUploader 图片上传  - Ant Design Mobile"
      },
      {
        "path": "/components/image-viewer",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/image-viewer/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/image-viewer/index.en.md",
          "updatedTime": 1648516636404,
          "slugs": [
            {
              "depth": 1,
              "value": "ImageViewer",
              "heading": "imageviewer"
            },
            {
              "depth": 2,
              "value": "ImageViewer",
              "heading": "imageviewer-1"
            },
            {
              "depth": 2,
              "value": "ImageViewer.Multi",
              "heading": "imageviewermulti"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 2,
              "value": "Imperative",
              "heading": "imperative"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Why I updated the value of defaultIndex, but the image displayed by ImageViewer.Multi did not switch?",
              "heading": "why-i-updated-the-value-of-defaultindex-but-the-image-displayed-by-imageviewermulti-did-not-switch"
            }
          ],
          "title": "ImageViewer",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/image-viewer",
            "title": "Image-viewer"
          }
        },
        "title": "ImageViewer - Ant Design Mobile"
      },
      {
        "path": "/zh/components/image-viewer",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/image-viewer/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/image-viewer/index.zh.md",
          "updatedTime": 1648516636405,
          "slugs": [
            {
              "depth": 1,
              "value": "ImageViewer 图片查看器",
              "heading": "imageviewer-图片查看器"
            },
            {
              "depth": 2,
              "value": "ImageViewer",
              "heading": "imageviewer"
            },
            {
              "depth": 2,
              "value": "ImageViewer.Multi",
              "heading": "imageviewermulti"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 2,
              "value": "指令式",
              "heading": "指令式"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "为什么我更新了 defaultIndex 的值，但是 ImageViewer.Multi 显示的图片并没有切换？",
              "heading": "为什么我更新了-defaultindex-的值但是-imageviewermulti-显示的图片并没有切换"
            }
          ],
          "title": "ImageViewer 图片查看器",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/image-viewer",
            "title": "Image-viewer"
          }
        },
        "title": "ImageViewer 图片查看器 - Ant Design Mobile"
      },
      {
        "path": "/components/index-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/index-bar/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/index-bar/index.en.md",
          "updatedTime": 1648516636412,
          "slugs": [
            {
              "depth": 1,
              "value": "IndexBar",
              "heading": "indexbar"
            },
            {
              "depth": 2,
              "value": "IndexBar",
              "heading": "indexbar-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "IndexBar.Panel",
              "heading": "indexbarpanel"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            }
          ],
          "title": "IndexBar",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/index-bar",
            "title": "Index-bar"
          }
        },
        "title": "IndexBar - Ant Design Mobile"
      },
      {
        "path": "/zh/components/index-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/index-bar/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/index-bar/index.zh.md",
          "updatedTime": 1648516636413,
          "slugs": [
            {
              "depth": 1,
              "value": "IndexBar 序列",
              "heading": "indexbar-序列"
            },
            {
              "depth": 2,
              "value": "IndexBar",
              "heading": "indexbar"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "IndexBar.Panel",
              "heading": "indexbarpanel"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            }
          ],
          "title": "IndexBar 序列",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/index-bar",
            "title": "Index-bar"
          }
        },
        "title": "IndexBar 序列 - Ant Design Mobile"
      },
      {
        "path": "/components/infinite-scroll",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/infinite-scroll/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/infinite-scroll/index.en.md",
          "updatedTime": 1648516636419,
          "slugs": [
            {
              "depth": 1,
              "value": "InfiniteScroll",
              "heading": "infinitescroll"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Customized Content",
              "heading": "customized-content"
            },
            {
              "depth": 3,
              "value": "Use with search",
              "heading": "use-with-search"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Does it support pulling down?",
              "heading": "does-it-support-pulling-down"
            }
          ],
          "title": "InfiniteScroll",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/infinite-scroll",
            "title": "Infinite-scroll"
          }
        },
        "title": "InfiniteScroll - Ant Design Mobile"
      },
      {
        "path": "/zh/components/infinite-scroll",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/infinite-scroll/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/infinite-scroll/index.zh.md",
          "updatedTime": 1648516636420,
          "slugs": [
            {
              "depth": 1,
              "value": "InfiniteScroll 无限滚动",
              "heading": "infinitescroll-无限滚动"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "自定义 Content",
              "heading": "自定义-content"
            },
            {
              "depth": 3,
              "value": "配合搜索使用",
              "heading": "配合搜索使用"
            },
            {
              "depth": 2,
              "value": "常见问题",
              "heading": "常见问题"
            },
            {
              "depth": 3,
              "value": "是否支持下拉刷新？",
              "heading": "是否支持下拉刷新"
            }
          ],
          "title": "InfiniteScroll 无限滚动",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/infinite-scroll",
            "title": "Infinite-scroll"
          }
        },
        "title": "InfiniteScroll 无限滚动 - Ant Design Mobile"
      },
      {
        "path": "/components/input",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/input/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/input/index.en.md",
          "updatedTime": 1648516636424,
          "slugs": [
            {
              "depth": 1,
              "value": "Input",
              "heading": "input"
            },
            {
              "depth": 3,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "InputFormat",
              "heading": "inputformat"
            },
            {
              "depth": 3,
              "value": "warming",
              "heading": "warming"
            }
          ],
          "title": "Input",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/input",
            "title": "Input"
          }
        },
        "title": "Input - Ant Design Mobile"
      },
      {
        "path": "/zh/components/input",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/input/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/input/index.zh.md",
          "updatedTime": 1648516636425,
          "slugs": [
            {
              "depth": 1,
              "value": "Input 输入框",
              "heading": "input-输入框"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "InputFormat",
              "heading": "inputformat"
            },
            {
              "depth": 3,
              "value": "注意事项",
              "heading": "注意事项"
            }
          ],
          "title": "Input 输入框",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/input",
            "title": "Input"
          }
        },
        "title": "Input 输入框 - Ant Design Mobile"
      },
      {
        "path": "/components/jumbo-tabs",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/jumbo-tabs/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/jumbo-tabs/index.en.md",
          "updatedTime": 1648516636432,
          "slugs": [
            {
              "depth": 1,
              "value": "JumboTabs",
              "heading": "jumbotabs"
            },
            {
              "depth": 2,
              "value": "JumboTabs",
              "heading": "jumbotabs-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "JumboTabs.Tab",
              "heading": "jumbotabstab"
            }
          ],
          "title": "JumboTabs",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/jumbo-tabs",
            "title": "Jumbo-tabs"
          }
        },
        "title": "JumboTabs - Ant Design Mobile"
      },
      {
        "path": "/zh/components/jumbo-tabs",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/jumbo-tabs/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/jumbo-tabs/index.zh.md",
          "updatedTime": 1648516636433,
          "slugs": [
            {
              "depth": 1,
              "value": "JumboTabs 复杂选项卡",
              "heading": "jumbotabs-复杂选项卡"
            },
            {
              "depth": 2,
              "value": "JumboTabs",
              "heading": "jumbotabs"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 2,
              "value": "JumboTabs.Tab",
              "heading": "jumbotabstab"
            }
          ],
          "title": "JumboTabs 复杂选项卡",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/jumbo-tabs",
            "title": "Jumbo-tabs"
          }
        },
        "title": "JumboTabs 复杂选项卡 - Ant Design Mobile"
      },
      {
        "path": "/components/list",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/list/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/list/index.en.md",
          "updatedTime": 1648516636440,
          "slugs": [
            {
              "depth": 1,
              "value": "List",
              "heading": "list"
            },
            {
              "depth": 2,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "List.Item",
              "heading": "listitem"
            },
            {
              "depth": 2,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 3,
              "value": "List",
              "heading": "list-1"
            },
            {
              "depth": 3,
              "value": "List.Item",
              "heading": "listitem-1"
            },
            {
              "depth": 2,
              "value": "Description",
              "heading": "description"
            }
          ],
          "title": "List",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/list",
            "title": "List"
          }
        },
        "title": "List - Ant Design Mobile"
      },
      {
        "path": "/zh/components/list",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/list/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/list/index.zh.md",
          "updatedTime": 1648516636441,
          "slugs": [
            {
              "depth": 1,
              "value": "List 列表",
              "heading": "list-列表"
            },
            {
              "depth": 2,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "List.Item",
              "heading": "listitem"
            },
            {
              "depth": 2,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 3,
              "value": "List",
              "heading": "list"
            },
            {
              "depth": 3,
              "value": "List.Item",
              "heading": "listitem-1"
            },
            {
              "depth": 2,
              "value": "Description",
              "heading": "description"
            }
          ],
          "title": "List 列表",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/list",
            "title": "List"
          }
        },
        "title": "List 列表 - Ant Design Mobile"
      },
      {
        "path": "/components/loading",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/loading/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/loading/index.en.md",
          "updatedTime": 1648516636447,
          "slugs": [
            {
              "depth": 1,
              "value": "Loading",
              "heading": "loading"
            },
            {
              "depth": 2,
              "value": "DotLoading",
              "heading": "dotloading"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "SpinLoading",
              "heading": "spinloading"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "Loading",
              "heading": "loading-1"
            }
          ],
          "title": "Loading",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/loading",
            "title": "Loading"
          }
        },
        "title": "Loading - Ant Design Mobile"
      },
      {
        "path": "/zh/components/loading",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/loading/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/loading/index.zh.md",
          "updatedTime": 1648516636448,
          "slugs": [
            {
              "depth": 1,
              "value": "Loading 加载中",
              "heading": "loading-加载中"
            },
            {
              "depth": 2,
              "value": "DotLoading 点状加载中",
              "heading": "dotloading-点状加载中"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 2,
              "value": "SpinLoading 转圈加载中",
              "heading": "spinloading-转圈加载中"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "Loading",
              "heading": "loading"
            }
          ],
          "title": "Loading 加载中",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/loading",
            "title": "Loading"
          }
        },
        "title": "Loading 加载中 - Ant Design Mobile"
      },
      {
        "path": "/components/mask",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/mask/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/mask/index.en.md",
          "updatedTime": 1648516636451,
          "slugs": [
            {
              "depth": 1,
              "value": "Mask",
              "heading": "mask"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Mask",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/mask",
            "title": "Mask"
          }
        },
        "title": "Mask - Ant Design Mobile"
      },
      {
        "path": "/zh/components/mask",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/mask/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/mask/index.zh.md",
          "updatedTime": 1648516636452,
          "slugs": [
            {
              "depth": 1,
              "value": "Mask 遮罩层",
              "heading": "mask-遮罩层"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Mask 遮罩层",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/mask",
            "title": "Mask"
          }
        },
        "title": "Mask 遮罩层 - Ant Design Mobile"
      },
      {
        "path": "/components/modal",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/modal/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/modal/index.en.md",
          "updatedTime": 1648516636459,
          "slugs": [
            {
              "depth": 1,
              "value": "Modal",
              "heading": "modal"
            },
            {
              "depth": 2,
              "value": "Modal",
              "heading": "modal-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Action",
              "heading": "action"
            },
            {
              "depth": 2,
              "value": "Imperative",
              "heading": "imperative"
            },
            {
              "depth": 3,
              "value": "Modal.show",
              "heading": "modalshow"
            },
            {
              "depth": 3,
              "value": "Modal.alert",
              "heading": "modalalert"
            },
            {
              "depth": 3,
              "value": "Modal.confirm",
              "heading": "modalconfirm"
            },
            {
              "depth": 3,
              "value": "Modal.clear",
              "heading": "modalclear"
            }
          ],
          "title": "Modal",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/modal",
            "title": "Modal"
          }
        },
        "title": "Modal - Ant Design Mobile"
      },
      {
        "path": "/zh/components/modal",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/modal/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/modal/index.zh.md",
          "updatedTime": 1648516636460,
          "slugs": [
            {
              "depth": 1,
              "value": "Modal 弹窗",
              "heading": "modal-弹窗"
            },
            {
              "depth": 2,
              "value": "Modal",
              "heading": "modal"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Action",
              "heading": "action"
            },
            {
              "depth": 2,
              "value": "指令式",
              "heading": "指令式"
            },
            {
              "depth": 3,
              "value": "Modal.show",
              "heading": "modalshow"
            },
            {
              "depth": 3,
              "value": "Modal.alert",
              "heading": "modalalert"
            },
            {
              "depth": 3,
              "value": "Modal.confirm",
              "heading": "modalconfirm"
            },
            {
              "depth": 3,
              "value": "Modal.clear",
              "heading": "modalclear"
            }
          ],
          "title": "Modal 弹窗",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/modal",
            "title": "Modal"
          }
        },
        "title": "Modal 弹窗 - Ant Design Mobile"
      },
      {
        "path": "/components/nav-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/nav-bar/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/nav-bar/index.en.md",
          "updatedTime": 1648516636464,
          "slugs": [
            {
              "depth": 1,
              "value": "NavBar",
              "heading": "navbar"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "NavBar",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/nav-bar",
            "title": "Nav-bar"
          }
        },
        "title": "NavBar - Ant Design Mobile"
      },
      {
        "path": "/zh/components/nav-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/nav-bar/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/nav-bar/index.zh.md",
          "updatedTime": 1648516636465,
          "slugs": [
            {
              "depth": 1,
              "value": "NavBar 导航栏",
              "heading": "navbar-导航栏"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "NavBar 导航栏",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/nav-bar",
            "title": "Nav-bar"
          }
        },
        "title": "NavBar 导航栏 - Ant Design Mobile"
      },
      {
        "path": "/components/notice-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/notice-bar/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/notice-bar/index.en.md",
          "updatedTime": 1648516636469,
          "slugs": [
            {
              "depth": 1,
              "value": "NoticeBar",
              "heading": "noticebar"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "NoticeBar",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/notice-bar",
            "title": "Notice-bar"
          }
        },
        "title": "NoticeBar - Ant Design Mobile"
      },
      {
        "path": "/zh/components/notice-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/notice-bar/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/notice-bar/index.zh.md",
          "updatedTime": 1648516636470,
          "slugs": [
            {
              "depth": 1,
              "value": "NoticeBar 通告栏",
              "heading": "noticebar-通告栏"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "NoticeBar 通告栏",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/notice-bar",
            "title": "Notice-bar"
          }
        },
        "title": "NoticeBar 通告栏 - Ant Design Mobile"
      },
      {
        "path": "/components/number-keyboard",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/number-keyboard/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/number-keyboard/index.en.md",
          "updatedTime": 1648516636472,
          "slugs": [
            {
              "depth": 1,
              "value": "NumberKeyboard ",
              "heading": "numberkeyboard"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            }
          ],
          "title": "NumberKeyboard ",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/number-keyboard",
            "title": "Number-keyboard"
          }
        },
        "title": "NumberKeyboard  - Ant Design Mobile"
      },
      {
        "path": "/zh/components/number-keyboard",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/number-keyboard/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/number-keyboard/index.zh.md",
          "updatedTime": 1648516636473,
          "slugs": [
            {
              "depth": 1,
              "value": "NumberKeyboard 数字键盘 ",
              "heading": "numberkeyboard-数字键盘"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            }
          ],
          "title": "NumberKeyboard 数字键盘 ",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/number-keyboard",
            "title": "Number-keyboard"
          }
        },
        "title": "NumberKeyboard 数字键盘  - Ant Design Mobile"
      },
      {
        "path": "/components/page-indicator",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/page-indicator/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/page-indicator/index.en.md",
          "updatedTime": 1648516636478,
          "componentName": "page-indicator",
          "slugs": [
            {
              "depth": 1,
              "value": "PageIndicator",
              "heading": "pageindicator"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "PageIndicator",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/page-indicator",
            "title": "Page-indicator"
          }
        },
        "title": "PageIndicator - Ant Design Mobile"
      },
      {
        "path": "/zh/components/page-indicator",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/page-indicator/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/page-indicator/index.zh.md",
          "updatedTime": 1648516636479,
          "componentName": "page-indicator",
          "slugs": [
            {
              "depth": 1,
              "value": "PageIndicator 页码指示器",
              "heading": "pageindicator-页码指示器"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "PageIndicator 页码指示器",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/page-indicator",
            "title": "Page-indicator"
          }
        },
        "title": "PageIndicator 页码指示器 - Ant Design Mobile"
      },
      {
        "path": "/components/passcode-input",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/passcode-input/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/passcode-input/index.en.md",
          "updatedTime": 1648516636482,
          "slugs": [
            {
              "depth": 1,
              "value": "PasscodeInput ",
              "heading": "passcodeinput"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "PasscodeInput ",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/passcode-input",
            "title": "Passcode-input"
          }
        },
        "title": "PasscodeInput  - Ant Design Mobile"
      },
      {
        "path": "/zh/components/passcode-input",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/passcode-input/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/passcode-input/index.zh.md",
          "updatedTime": 1648516636484,
          "slugs": [
            {
              "depth": 1,
              "value": "PasscodeInput 密码输入框 ",
              "heading": "passcodeinput-密码输入框"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "PasscodeInput 密码输入框 ",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/passcode-input",
            "title": "Passcode-input"
          }
        },
        "title": "PasscodeInput 密码输入框  - Ant Design Mobile"
      },
      {
        "path": "/components/picker",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/picker/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/picker/index.en.md",
          "updatedTime": 1648516636488,
          "slugs": [
            {
              "depth": 1,
              "value": "Picker",
              "heading": "picker"
            },
            {
              "depth": 2,
              "value": "Picker",
              "heading": "picker-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "CascadePicker",
              "heading": "cascadepicker"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables-1"
            },
            {
              "depth": 2,
              "value": "DatePicker",
              "heading": "datepicker"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-2"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables-2"
            },
            {
              "depth": 2,
              "value": "Imperative Call",
              "heading": "imperative-call"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "How to highlight the selected items?",
              "heading": "how-to-highlight-the-selected-items"
            },
            {
              "depth": 3,
              "value": "Why is the name of the component called \"DatePicker\" instead of \"DatetimePicker\"?",
              "heading": "why-is-the-name-of-the-component-called-datepicker-instead-of-datetimepicker"
            },
            {
              "depth": 3,
              "value": "Why is there no \"hour-minute\" or \"month-day\" option?",
              "heading": "why-is-there-no-hour-minute-or-month-day-option"
            }
          ],
          "title": "Picker",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/picker",
            "title": "Picker"
          }
        },
        "title": "Picker - Ant Design Mobile"
      },
      {
        "path": "/zh/components/picker",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/picker/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/picker/index.zh.md",
          "updatedTime": 1648516636490,
          "slugs": [
            {
              "depth": 1,
              "value": "Picker 选择器",
              "heading": "picker-选择器"
            },
            {
              "depth": 2,
              "value": "Picker",
              "heading": "picker"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "CascadePicker",
              "heading": "cascadepicker"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量-1"
            },
            {
              "depth": 2,
              "value": "DatePicker",
              "heading": "datepicker"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-2"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量-2"
            },
            {
              "depth": 2,
              "value": "指令式调用",
              "heading": "指令式调用"
            },
            {
              "depth": 2,
              "value": "常见问题",
              "heading": "常见问题"
            },
            {
              "depth": 3,
              "value": "如何高亮当前选项",
              "heading": "如何高亮当前选项"
            },
            {
              "depth": 3,
              "value": "为什么组件的名字叫 \"DatePicker\" 而不是 \"DatetimePicker\"？",
              "heading": "为什么组件的名字叫-datepicker-而不是-datetimepicker"
            },
            {
              "depth": 3,
              "value": "日期选择器为什么没有 \"时-分\" 或者 \"月-日\" 选择？",
              "heading": "日期选择器为什么没有-时-分-或者-月-日-选择"
            }
          ],
          "title": "Picker 选择器",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/picker",
            "title": "Picker"
          }
        },
        "title": "Picker 选择器 - Ant Design Mobile"
      },
      {
        "path": "/components/picker-view",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/picker-view/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/picker-view/index.en.md",
          "updatedTime": 1648516636495,
          "slugs": [
            {
              "depth": 1,
              "value": "PickerView",
              "heading": "pickerview"
            },
            {
              "depth": 2,
              "value": "PickerView",
              "heading": "pickerview-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "CascadePickerView",
              "heading": "cascadepickerview"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables-1"
            },
            {
              "depth": 2,
              "value": "DatePickerView",
              "heading": "datepickerview"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-2"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables-2"
            }
          ],
          "title": "PickerView",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/picker-view",
            "title": "Picker-view"
          }
        },
        "title": "PickerView - Ant Design Mobile"
      },
      {
        "path": "/zh/components/picker-view",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/picker-view/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/picker-view/index.zh.md",
          "updatedTime": 1648516636496,
          "slugs": [
            {
              "depth": 1,
              "value": "PickerView 选择器视图",
              "heading": "pickerview-选择器视图"
            },
            {
              "depth": 2,
              "value": "PickerView",
              "heading": "pickerview"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "CascadePickerView",
              "heading": "cascadepickerview"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量-1"
            },
            {
              "depth": 2,
              "value": "DatePickerView",
              "heading": "datepickerview"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-2"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量-2"
            }
          ],
          "title": "PickerView 选择器视图",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/picker-view",
            "title": "Picker-view"
          }
        },
        "title": "PickerView 选择器视图 - Ant Design Mobile"
      },
      {
        "path": "/components/popover",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/popover/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/popover/index.en.md",
          "updatedTime": 1648516636503,
          "slugs": [
            {
              "depth": 1,
              "value": "Popover",
              "heading": "popover"
            },
            {
              "depth": 2,
              "value": "Popover",
              "heading": "popover-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 2,
              "value": "Popover.Menu",
              "heading": "popovermenu"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            },
            {
              "depth": 3,
              "value": "Action",
              "heading": "action"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables-1"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref-1"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Why the Popover not show in some cases?",
              "heading": "why-the-popover-not-show-in-some-cases"
            }
          ],
          "title": "Popover",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/popover",
            "title": "Popover"
          }
        },
        "title": "Popover - Ant Design Mobile"
      },
      {
        "path": "/zh/components/popover",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/popover/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/popover/index.zh.md",
          "updatedTime": 1648516636504,
          "slugs": [
            {
              "depth": 1,
              "value": "Popover 气泡弹出框",
              "heading": "popover-气泡弹出框"
            },
            {
              "depth": 2,
              "value": "Popover",
              "heading": "popover"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 2,
              "value": "Popover.Menu",
              "heading": "popovermenu"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            },
            {
              "depth": 3,
              "value": "Action",
              "heading": "action"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量-1"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref-1"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "为什么有些情况下 Popover 不显示？",
              "heading": "为什么有些情况下-popover-不显示"
            }
          ],
          "title": "Popover 气泡弹出框",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/popover",
            "title": "Popover"
          }
        },
        "title": "Popover 气泡弹出框 - Ant Design Mobile"
      },
      {
        "path": "/components/popup",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/popup/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/popup/index.en.md",
          "updatedTime": 1648516636509,
          "slugs": [
            {
              "depth": 1,
              "value": "Popup",
              "heading": "popup"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Popup",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/popup",
            "title": "Popup"
          }
        },
        "title": "Popup - Ant Design Mobile"
      },
      {
        "path": "/zh/components/popup",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/popup/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/popup/index.zh.md",
          "updatedTime": 1648516636510,
          "slugs": [
            {
              "depth": 1,
              "value": "Popup 弹出层",
              "heading": "popup-弹出层"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Popup 弹出层",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/popup",
            "title": "Popup"
          }
        },
        "title": "Popup 弹出层 - Ant Design Mobile"
      },
      {
        "path": "/components/progress",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/progress/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/progress/index.en.md",
          "updatedTime": 1648516636513,
          "slugs": [
            {
              "depth": 1,
              "value": "Progress",
              "heading": "progress"
            },
            {
              "depth": 3,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Progress",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/progress",
            "title": "Progress"
          }
        },
        "title": "Progress - Ant Design Mobile"
      },
      {
        "path": "/zh/components/progress",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/progress/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/progress/index.zh.md",
          "updatedTime": 1648516636514,
          "slugs": [
            {
              "depth": 1,
              "value": "Progress 进度条",
              "heading": "progress-进度条"
            },
            {
              "depth": 3,
              "value": "props 属性",
              "heading": "props-属性"
            },
            {
              "depth": 2,
              "value": "CSS Variables 样式",
              "heading": "css-variables-样式"
            }
          ],
          "title": "Progress 进度条",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/progress",
            "title": "Progress"
          }
        },
        "title": "Progress 进度条 - Ant Design Mobile"
      },
      {
        "path": "/components/progress-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/progress-bar/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/progress-bar/index.en.md",
          "updatedTime": 1648516636519,
          "slugs": [
            {
              "depth": 1,
              "value": "ProgressBar",
              "heading": "progressbar"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "ProgressBar",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/progress-bar",
            "title": "Progress-bar"
          }
        },
        "title": "ProgressBar - Ant Design Mobile"
      },
      {
        "path": "/zh/components/progress-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/progress-bar/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/progress-bar/index.zh.md",
          "updatedTime": 1648516636520,
          "slugs": [
            {
              "depth": 1,
              "value": "ProgressBar 进度条",
              "heading": "progressbar-进度条"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "ProgressBar 进度条",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/progress-bar",
            "title": "Progress-bar"
          }
        },
        "title": "ProgressBar 进度条 - Ant Design Mobile"
      },
      {
        "path": "/components/progress-circle",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/progress-circle/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/progress-circle/index.en.md",
          "updatedTime": 1648516636524,
          "slugs": [
            {
              "depth": 1,
              "value": "ProgressCircle",
              "heading": "progresscircle"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Important reminder about using rem",
              "heading": "important-reminder-about-using-rem"
            }
          ],
          "title": "ProgressCircle",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/progress-circle",
            "title": "Progress-circle"
          }
        },
        "title": "ProgressCircle - Ant Design Mobile"
      },
      {
        "path": "/zh/components/progress-circle",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/progress-circle/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/progress-circle/index.zh.md",
          "updatedTime": 1648516636524,
          "slugs": [
            {
              "depth": 1,
              "value": "ProgressCircle 进度圈",
              "heading": "progresscircle-进度圈"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "常见问题",
              "heading": "常见问题"
            },
            {
              "depth": 3,
              "value": "关于使用 rem 的重要提醒",
              "heading": "关于使用-rem-的重要提醒"
            }
          ],
          "title": "ProgressCircle 进度圈",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/progress-circle",
            "title": "Progress-circle"
          }
        },
        "title": "ProgressCircle 进度圈 - Ant Design Mobile"
      },
      {
        "path": "/components/pull-to-refresh",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/pull-to-refresh/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/pull-to-refresh/index.en.md",
          "updatedTime": 1648516636530,
          "slugs": [
            {
              "depth": 1,
              "value": "PullToRefresh",
              "heading": "pulltorefresh"
            },
            {
              "depth": 3,
              "value": "Basic Usage",
              "heading": "basic-usage"
            },
            {
              "depth": 3,
              "value": "Customize Text",
              "heading": "customize-text"
            },
            {
              "depth": 3,
              "value": "Handle Refresh Error",
              "heading": "handle-refresh-error"
            },
            {
              "depth": 3,
              "value": "Nested Scroll Areas",
              "heading": "nested-scroll-areas"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Does it support pull up to load more?",
              "heading": "does-it-support-pull-up-to-load-more"
            },
            {
              "depth": 3,
              "value": "About the browser's default pull-down behavior",
              "heading": "about-the-browsers-default-pull-down-behavior"
            }
          ],
          "title": "PullToRefresh",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/pull-to-refresh",
            "title": "Pull-to-refresh"
          }
        },
        "title": "PullToRefresh - Ant Design Mobile"
      },
      {
        "path": "/zh/components/pull-to-refresh",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/pull-to-refresh/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/pull-to-refresh/index.zh.md",
          "updatedTime": 1648516636531,
          "slugs": [
            {
              "depth": 1,
              "value": "PullToRefresh 下拉刷新",
              "heading": "pulltorefresh-下拉刷新"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "自定义提示文案",
              "heading": "自定义提示文案"
            },
            {
              "depth": 3,
              "value": "处理刷新失败的情况",
              "heading": "处理刷新失败的情况"
            },
            {
              "depth": 3,
              "value": "内容区域存在多层嵌套",
              "heading": "内容区域存在多层嵌套"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 2,
              "value": "常见问题",
              "heading": "常见问题"
            },
            {
              "depth": 3,
              "value": "是否支持上拉加载更多？",
              "heading": "是否支持上拉加载更多"
            },
            {
              "depth": 3,
              "value": "关于浏览器的默认下拉行为",
              "heading": "关于浏览器的默认下拉行为"
            }
          ],
          "title": "PullToRefresh 下拉刷新",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/pull-to-refresh",
            "title": "Pull-to-refresh"
          }
        },
        "title": "PullToRefresh 下拉刷新 - Ant Design Mobile"
      },
      {
        "path": "/components/radio",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/radio/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/radio/index.en.md",
          "updatedTime": 1648516636536,
          "slugs": [
            {
              "depth": 1,
              "value": "Radio",
              "heading": "radio"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Radio",
              "heading": "radio-1"
            },
            {
              "depth": 3,
              "value": "Radio.Group",
              "heading": "radiogroup"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 3,
              "value": "Radio",
              "heading": "radio-2"
            }
          ],
          "title": "Radio",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/radio",
            "title": "Radio"
          }
        },
        "title": "Radio - Ant Design Mobile"
      },
      {
        "path": "/zh/components/radio",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/radio/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/radio/index.zh.md",
          "updatedTime": 1648516636537,
          "slugs": [
            {
              "depth": 1,
              "value": "Radio 单选框",
              "heading": "radio-单选框"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Radio",
              "heading": "radio"
            },
            {
              "depth": 3,
              "value": "Radio.Group",
              "heading": "radiogroup"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 3,
              "value": "Radio",
              "heading": "radio-1"
            }
          ],
          "title": "Radio 单选框",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/radio",
            "title": "Radio"
          }
        },
        "title": "Radio 单选框 - Ant Design Mobile"
      },
      {
        "path": "/components/rate",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/rate/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/rate/index.en.md",
          "updatedTime": 1648516636540,
          "slugs": [
            {
              "depth": 1,
              "value": "Rate",
              "heading": "rate"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Rate",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/rate",
            "title": "Rate"
          }
        },
        "title": "Rate - Ant Design Mobile"
      },
      {
        "path": "/zh/components/rate",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/rate/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/rate/index.zh.md",
          "updatedTime": 1648516636542,
          "slugs": [
            {
              "depth": 1,
              "value": "Rate 评分",
              "heading": "rate-评分"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Rate 评分",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/rate",
            "title": "Rate"
          }
        },
        "title": "Rate 评分 - Ant Design Mobile"
      },
      {
        "path": "/components/result",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/result/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/result/index.en.md",
          "updatedTime": 1648516636545,
          "slugs": [
            {
              "depth": 1,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            }
          ],
          "title": "Result",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/result",
            "title": "Result"
          }
        },
        "title": "Result - Ant Design Mobile"
      },
      {
        "path": "/zh/components/result",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/result/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/result/index.zh.md",
          "updatedTime": 1648516636547,
          "slugs": [
            {
              "depth": 1,
              "value": "Result 结果",
              "heading": "result-结果"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            }
          ],
          "title": "Result 结果",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/result",
            "title": "Result"
          }
        },
        "title": "Result 结果 - Ant Design Mobile"
      },
      {
        "path": "/components/safe-area",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/safe-area/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/safe-area/index.en.md",
          "updatedTime": 1648516636550,
          "componentName": "safe-area",
          "slugs": [
            {
              "depth": 1,
              "value": "SafeArea",
              "heading": "safearea"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            }
          ],
          "title": "SafeArea",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/safe-area",
            "title": "Safe-area"
          }
        },
        "title": "SafeArea - Ant Design Mobile"
      },
      {
        "path": "/zh/components/safe-area",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/safe-area/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/safe-area/index.zh.md",
          "updatedTime": 1648516636551,
          "componentName": "safe-area",
          "slugs": [
            {
              "depth": 1,
              "value": "SafeArea 安全区",
              "heading": "safearea-安全区"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            }
          ],
          "title": "SafeArea 安全区",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/safe-area",
            "title": "Safe-area"
          }
        },
        "title": "SafeArea 安全区 - Ant Design Mobile"
      },
      {
        "path": "/components/scroll-mask",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/scroll-mask/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/scroll-mask/index.en.md",
          "updatedTime": 1648516636555,
          "slugs": [
            {
              "depth": 1,
              "value": "ScrollMask",
              "heading": "scrollmask"
            },
            {
              "depth": 2,
              "value": "ScrollMask",
              "heading": "scrollmask-1"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            }
          ],
          "title": "ScrollMask",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/scroll-mask",
            "title": "Scroll-mask"
          }
        },
        "title": "ScrollMask - Ant Design Mobile"
      },
      {
        "path": "/zh/components/scroll-mask",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/scroll-mask/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/scroll-mask/index.zh.md",
          "updatedTime": 1648516636556,
          "slugs": [
            {
              "depth": 1,
              "value": "ScrollMask 滚动两侧遮罩",
              "heading": "scrollmask-滚动两侧遮罩"
            },
            {
              "depth": 2,
              "value": "ScrollMask",
              "heading": "scrollmask"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            }
          ],
          "title": "ScrollMask 滚动两侧遮罩",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/scroll-mask",
            "title": "Scroll-mask"
          }
        },
        "title": "ScrollMask 滚动两侧遮罩 - Ant Design Mobile"
      },
      {
        "path": "/components/search-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/search-bar/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/search-bar/index.en.md",
          "updatedTime": 1648516636559,
          "slugs": [
            {
              "depth": 1,
              "value": "SearchBar",
              "heading": "searchbar"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "Ref",
              "heading": "ref"
            }
          ],
          "title": "SearchBar",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/search-bar",
            "title": "Search-bar"
          }
        },
        "title": "SearchBar - Ant Design Mobile"
      },
      {
        "path": "/zh/components/search-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/search-bar/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/search-bar/index.zh.md",
          "updatedTime": 1648516636561,
          "slugs": [
            {
              "depth": 1,
              "value": "SearchBar 搜索框",
              "heading": "searchbar-搜索框"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "Ref",
              "heading": "ref"
            }
          ],
          "title": "SearchBar 搜索框",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/search-bar",
            "title": "Search-bar"
          }
        },
        "title": "SearchBar 搜索框 - Ant Design Mobile"
      },
      {
        "path": "/components/selector",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/selector/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/selector/index.en.md",
          "updatedTime": 1648516636565,
          "slugs": [
            {
              "depth": 1,
              "value": "Selector",
              "heading": "selector"
            },
            {
              "depth": 2,
              "value": "Selector",
              "heading": "selector-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "Types",
              "heading": "types"
            },
            {
              "depth": 3,
              "value": "SelectorValue",
              "heading": "selectorvalue"
            },
            {
              "depth": 3,
              "value": "SelectorOption",
              "heading": "selectoroption"
            },
            {
              "depth": 2,
              "value": "Generics",
              "heading": "generics"
            }
          ],
          "title": "Selector",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/selector",
            "title": "Selector"
          }
        },
        "title": "Selector - Ant Design Mobile"
      },
      {
        "path": "/zh/components/selector",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/selector/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/selector/index.zh.md",
          "updatedTime": 1648516636566,
          "slugs": [
            {
              "depth": 1,
              "value": "Selector 选择组",
              "heading": "selector-选择组"
            },
            {
              "depth": 2,
              "value": "Selector",
              "heading": "selector"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "类型定义",
              "heading": "类型定义"
            },
            {
              "depth": 3,
              "value": "SelectorValue",
              "heading": "selectorvalue"
            },
            {
              "depth": 3,
              "value": "SelectorOption",
              "heading": "selectoroption"
            },
            {
              "depth": 2,
              "value": "泛型",
              "heading": "泛型"
            }
          ],
          "title": "Selector 选择组",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/selector",
            "title": "Selector"
          }
        },
        "title": "Selector 选择组 - Ant Design Mobile"
      },
      {
        "path": "/components/side-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/side-bar/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/side-bar/index.en.md",
          "updatedTime": 1648516636573,
          "slugs": [
            {
              "depth": 1,
              "value": "SideBar",
              "heading": "sidebar"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "SideBar",
              "heading": "sidebar-1"
            },
            {
              "depth": 3,
              "value": "SideBar.Item",
              "heading": "sidebaritem"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "SideBar",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/side-bar",
            "title": "Side-bar"
          }
        },
        "title": "SideBar - Ant Design Mobile"
      },
      {
        "path": "/zh/components/side-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/side-bar/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/side-bar/index.zh.md",
          "updatedTime": 1648516636574,
          "slugs": [
            {
              "depth": 1,
              "value": "SideBar 侧边导航",
              "heading": "sidebar-侧边导航"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "SideBar",
              "heading": "sidebar"
            },
            {
              "depth": 3,
              "value": "SideBar.Item",
              "heading": "sidebaritem"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "SideBar 侧边导航",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/side-bar",
            "title": "Side-bar"
          }
        },
        "title": "SideBar 侧边导航 - Ant Design Mobile"
      },
      {
        "path": "/components/skeleton/skeleton",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/skeleton/skeleton.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/skeleton/skeleton.en.md",
          "updatedTime": 1648516636578,
          "slugs": [
            {
              "depth": 1,
              "value": "Skeleton",
              "heading": "skeleton"
            },
            {
              "depth": 2,
              "value": "Skeleton",
              "heading": "skeleton-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "Skeleton.Title",
              "heading": "skeletontitle"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            },
            {
              "depth": 2,
              "value": "Skeleton.Paragraph",
              "heading": "skeletonparagraph"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-2"
            }
          ],
          "title": "Skeleton",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/skeleton",
            "title": "Skeleton"
          }
        },
        "title": "Skeleton - Ant Design Mobile"
      },
      {
        "path": "/zh/components/skeleton/skeleton",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/skeleton/skeleton.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/skeleton/skeleton.zh.md",
          "updatedTime": 1648516636579,
          "slugs": [
            {
              "depth": 1,
              "value": "Skeleton 骨架屏",
              "heading": "skeleton-骨架屏"
            },
            {
              "depth": 2,
              "value": "Skeleton",
              "heading": "skeleton"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "Skeleton.Title",
              "heading": "skeletontitle"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            },
            {
              "depth": 2,
              "value": "Skeleton.Paragraph",
              "heading": "skeletonparagraph"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-2"
            }
          ],
          "title": "Skeleton 骨架屏",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/skeleton",
            "title": "Skeleton"
          }
        },
        "title": "Skeleton 骨架屏 - Ant Design Mobile"
      },
      {
        "path": "/components/slider",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/slider/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/slider/index.en.md",
          "updatedTime": 1648516636581,
          "slugs": [
            {
              "depth": 1,
              "value": "Slider",
              "heading": "slider"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Slider",
              "heading": "slider-1"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Slider",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/slider",
            "title": "Slider"
          }
        },
        "title": "Slider - Ant Design Mobile"
      },
      {
        "path": "/zh/components/slider",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/slider/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/slider/index.zh.md",
          "updatedTime": 1648516636583,
          "slugs": [
            {
              "depth": 1,
              "value": "Slider 滑动输入条",
              "heading": "slider-滑动输入条"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Slider",
              "heading": "slider"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Slider 滑动输入条",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/slider",
            "title": "Slider"
          }
        },
        "title": "Slider 滑动输入条 - Ant Design Mobile"
      },
      {
        "path": "/components/snackbar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/snackbar/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/snackbar/index.en.md",
          "updatedTime": 1648516636588,
          "slugs": [
            {
              "depth": 1,
              "value": "Snackbar",
              "heading": "snackbar"
            },
            {
              "depth": 3,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Snackbar",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/snackbar",
            "title": "Snackbar"
          }
        },
        "title": "Snackbar - Ant Design Mobile"
      },
      {
        "path": "/zh/components/snackbar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/snackbar/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/snackbar/index.zh.md",
          "updatedTime": 1648516636589,
          "slugs": [
            {
              "depth": 1,
              "value": "Snackbar 轻弹窗",
              "heading": "snackbar-轻弹窗"
            },
            {
              "depth": 3,
              "value": "props 属性",
              "heading": "props-属性"
            },
            {
              "depth": 2,
              "value": "CSS Variables 样式",
              "heading": "css-variables-样式"
            }
          ],
          "title": "Snackbar 轻弹窗",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/snackbar",
            "title": "Snackbar"
          }
        },
        "title": "Snackbar 轻弹窗 - Ant Design Mobile"
      },
      {
        "path": "/components/space",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/space/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/space/index.en.md",
          "updatedTime": 1648516636594,
          "slugs": [
            {
              "depth": 1,
              "value": "Space",
              "heading": "space"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Space",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/space",
            "title": "Space"
          }
        },
        "title": "Space - Ant Design Mobile"
      },
      {
        "path": "/zh/components/space",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/space/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/space/index.zh.md",
          "updatedTime": 1648516636595,
          "slugs": [
            {
              "depth": 1,
              "value": "Space 间距",
              "heading": "space-间距"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Space 间距",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/space",
            "title": "Space"
          }
        },
        "title": "Space 间距 - Ant Design Mobile"
      },
      {
        "path": "/components/stepper",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/stepper/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/stepper/index.en.md",
          "updatedTime": 1648516636603,
          "slugs": [
            {
              "depth": 1,
              "value": "Stepper",
              "heading": "stepper"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Stepper",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/stepper",
            "title": "Stepper"
          }
        },
        "title": "Stepper - Ant Design Mobile"
      },
      {
        "path": "/zh/components/stepper",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/stepper/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/stepper/index.zh.md",
          "updatedTime": 1648516636604,
          "slugs": [
            {
              "depth": 1,
              "value": "Stepper 步进器",
              "heading": "stepper-步进器"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Stepper 步进器",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/stepper",
            "title": "Stepper"
          }
        },
        "title": "Stepper 步进器 - Ant Design Mobile"
      },
      {
        "path": "/components/steps",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/steps/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/steps/index.en.md",
          "updatedTime": 1648516636608,
          "slugs": [
            {
              "depth": 1,
              "value": "Steps",
              "heading": "steps"
            },
            {
              "depth": 2,
              "value": "Steps",
              "heading": "steps-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "Steps.Step",
              "heading": "stepsstep"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            }
          ],
          "title": "Steps",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/steps",
            "title": "Steps"
          }
        },
        "title": "Steps - Ant Design Mobile"
      },
      {
        "path": "/zh/components/steps",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/steps/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/steps/index.zh.md",
          "updatedTime": 1648516636609,
          "slugs": [
            {
              "depth": 1,
              "value": "Steps 步骤条",
              "heading": "steps-步骤条"
            },
            {
              "depth": 2,
              "value": "Steps",
              "heading": "steps"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "Steps.Step",
              "heading": "stepsstep"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            }
          ],
          "title": "Steps 步骤条",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/steps",
            "title": "Steps"
          }
        },
        "title": "Steps 步骤条 - Ant Design Mobile"
      },
      {
        "path": "/components/swipe-action",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/swipe-action/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/swipe-action/index.en.md",
          "updatedTime": 1648516636611,
          "componentName": "swipe-action",
          "slugs": [
            {
              "depth": 1,
              "value": "SwipeAction",
              "heading": "swipeaction"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Action",
              "heading": "action"
            },
            {
              "depth": 2,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "SwipeAction",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/swipe-action",
            "title": "Swipe-action"
          }
        },
        "title": "SwipeAction - Ant Design Mobile"
      },
      {
        "path": "/zh/components/swipe-action",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/swipe-action/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/swipe-action/index.zh.md",
          "updatedTime": 1648516636613,
          "componentName": "swipe-action",
          "slugs": [
            {
              "depth": 1,
              "value": "SwipeAction 滑动操作",
              "heading": "swipeaction-滑动操作"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Action",
              "heading": "action"
            },
            {
              "depth": 2,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "SwipeAction 滑动操作",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/swipe-action",
            "title": "Swipe-action"
          }
        },
        "title": "SwipeAction 滑动操作 - Ant Design Mobile"
      },
      {
        "path": "/components/swiper",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/swiper/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/swiper/index.en.md",
          "updatedTime": 1648516636619,
          "slugs": [
            {
              "depth": 1,
              "value": "Swiper",
              "heading": "swiper"
            },
            {
              "depth": 3,
              "value": "Basic Usage",
              "heading": "basic-usage"
            },
            {
              "depth": 3,
              "value": "Slides which are not full-width",
              "heading": "slides-which-are-not-full-width"
            },
            {
              "depth": 3,
              "value": "Indicators",
              "heading": "indicators"
            },
            {
              "depth": 3,
              "value": "Full Page Guide",
              "heading": "full-page-guide"
            },
            {
              "depth": 3,
              "value": "Vertical",
              "heading": "vertical"
            },
            {
              "depth": 2,
              "value": "Swiper",
              "heading": "swiper-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 2,
              "value": "Swiper.Item",
              "heading": "swiperitem"
            }
          ],
          "title": "Swiper",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/swiper",
            "title": "Swiper"
          }
        },
        "title": "Swiper - Ant Design Mobile"
      },
      {
        "path": "/zh/components/swiper",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/swiper/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/swiper/index.zh.md",
          "updatedTime": 1648516636620,
          "slugs": [
            {
              "depth": 1,
              "value": "Swiper 走马灯",
              "heading": "swiper-走马灯"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "不是满宽的滑块",
              "heading": "不是满宽的滑块"
            },
            {
              "depth": 3,
              "value": "指示器",
              "heading": "指示器"
            },
            {
              "depth": 3,
              "value": "全屏引导",
              "heading": "全屏引导"
            },
            {
              "depth": 3,
              "value": "竖向",
              "heading": "竖向"
            },
            {
              "depth": 2,
              "value": "Swiper",
              "heading": "swiper"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 2,
              "value": "Swiper.Item",
              "heading": "swiperitem"
            }
          ],
          "title": "Swiper 走马灯",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/swiper",
            "title": "Swiper"
          }
        },
        "title": "Swiper 走马灯 - Ant Design Mobile"
      },
      {
        "path": "/components/switch",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/switch/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/switch/index.en.md",
          "updatedTime": 1648516636623,
          "slugs": [
            {
              "depth": 1,
              "value": "Switch",
              "heading": "switch"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Switch",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/switch",
            "title": "Switch"
          }
        },
        "title": "Switch - Ant Design Mobile"
      },
      {
        "path": "/zh/components/switch",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/switch/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/switch/index.zh.md",
          "updatedTime": 1648516636624,
          "slugs": [
            {
              "depth": 1,
              "value": "Switch 开关",
              "heading": "switch-开关"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Switch 开关",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/switch",
            "title": "Switch"
          }
        },
        "title": "Switch 开关 - Ant Design Mobile"
      },
      {
        "path": "/components/tab-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/tab-bar/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/tab-bar/index.en.md",
          "updatedTime": 1648516636627,
          "slugs": [
            {
              "depth": 1,
              "value": "TabBar",
              "heading": "tabbar"
            },
            {
              "depth": 2,
              "value": "TabBar",
              "heading": "tabbar-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "TabBar.Item",
              "heading": "tabbaritem"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props-1"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Why can't the TabBar be fixed at the bottom of the page?",
              "heading": "why-cant-the-tabbar-be-fixed-at-the-bottom-of-the-page"
            }
          ],
          "title": "TabBar",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/tab-bar",
            "title": "Tab-bar"
          }
        },
        "title": "TabBar - Ant Design Mobile"
      },
      {
        "path": "/zh/components/tab-bar",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/tab-bar/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/tab-bar/index.zh.md",
          "updatedTime": 1648516636628,
          "slugs": [
            {
              "depth": 1,
              "value": "TabBar 标签栏",
              "heading": "tabbar-标签栏"
            },
            {
              "depth": 2,
              "value": "TabBar",
              "heading": "tabbar"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 2,
              "value": "TabBar.Item",
              "heading": "tabbaritem"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性-1"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "TabBar 为什么不能固定在页面底部？",
              "heading": "tabbar-为什么不能固定在页面底部"
            }
          ],
          "title": "TabBar 标签栏",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/tab-bar",
            "title": "Tab-bar"
          }
        },
        "title": "TabBar 标签栏 - Ant Design Mobile"
      },
      {
        "path": "/components/tabs",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/tabs/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/tabs/index.en.md",
          "updatedTime": 1648516636630,
          "slugs": [
            {
              "depth": 1,
              "value": "Tabs",
              "heading": "tabs"
            },
            {
              "depth": 2,
              "value": "Tabs",
              "heading": "tabs-1"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            },
            {
              "depth": 2,
              "value": "Tabs.Tab",
              "heading": "tabstab"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Does Tabs support sticky effect?",
              "heading": "does-tabs-support-sticky-effect"
            }
          ],
          "title": "Tabs",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/tabs",
            "title": "Tabs"
          }
        },
        "title": "Tabs - Ant Design Mobile"
      },
      {
        "path": "/zh/components/tabs",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/tabs/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/tabs/index.zh.md",
          "updatedTime": 1648516636631,
          "slugs": [
            {
              "depth": 1,
              "value": "Tabs 标签页",
              "heading": "tabs-标签页"
            },
            {
              "depth": 2,
              "value": "Tabs",
              "heading": "tabs"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            },
            {
              "depth": 2,
              "value": "Tabs.Tab",
              "heading": "tabstab"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "Tabs 是否支持 sticky 吸顶效果？",
              "heading": "tabs-是否支持-sticky-吸顶效果"
            }
          ],
          "title": "Tabs 标签页",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/tabs",
            "title": "Tabs"
          }
        },
        "title": "Tabs 标签页 - Ant Design Mobile"
      },
      {
        "path": "/components/tag",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/tag/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/tag/index.en.md",
          "updatedTime": 1648516636633,
          "slugs": [
            {
              "depth": 1,
              "value": "Tag",
              "heading": "tag"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Tag",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/tag",
            "title": "Tag"
          }
        },
        "title": "Tag - Ant Design Mobile"
      },
      {
        "path": "/zh/components/tag",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/tag/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/tag/index.zh.md",
          "updatedTime": 1648516636633,
          "slugs": [
            {
              "depth": 1,
              "value": "Tag 标签",
              "heading": "tag-标签"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "Tag 标签",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/tag",
            "title": "Tag"
          }
        },
        "title": "Tag 标签 - Ant Design Mobile"
      },
      {
        "path": "/components/text-area",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/text-area/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/text-area/index.en.md",
          "updatedTime": 1648516636636,
          "slugs": [
            {
              "depth": 1,
              "value": "TextArea",
              "heading": "textarea"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "TextArea",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/text-area",
            "title": "Text-area"
          }
        },
        "title": "TextArea - Ant Design Mobile"
      },
      {
        "path": "/zh/components/text-area",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/text-area/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/text-area/index.zh.md",
          "updatedTime": 1648516636637,
          "slugs": [
            {
              "depth": 1,
              "value": "TextArea 文本域",
              "heading": "textarea-文本域"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "TextArea 文本域",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/text-area",
            "title": "Text-area"
          }
        },
        "title": "TextArea 文本域 - Ant Design Mobile"
      },
      {
        "path": "/components/toast",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/toast/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/toast/index.en.md",
          "updatedTime": 1648516636640,
          "slugs": [
            {
              "depth": 1,
              "value": "Toast",
              "heading": "toast"
            },
            {
              "depth": 3,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "Toast",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/toast",
            "title": "Toast"
          }
        },
        "title": "Toast - Ant Design Mobile"
      },
      {
        "path": "/zh/components/toast",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/toast/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/toast/index.zh.md",
          "updatedTime": 1648516636641,
          "slugs": [
            {
              "depth": 1,
              "value": "Toast 轻提示",
              "heading": "toast-轻提示"
            },
            {
              "depth": 3,
              "value": "props 属性",
              "heading": "props-属性"
            },
            {
              "depth": 2,
              "value": "CSS Variables 样式",
              "heading": "css-variables-样式"
            }
          ],
          "title": "Toast 轻提示",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/toast",
            "title": "Toast"
          }
        },
        "title": "Toast 轻提示 - Ant Design Mobile"
      },
      {
        "path": "/components/tree-select",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/tree-select/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/tree-select/index.en.md",
          "updatedTime": 1648516636644,
          "slugs": [
            {
              "depth": 1,
              "value": "TreeSelect ",
              "heading": "treeselect"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "TreeSelect",
              "heading": "treeselect-1"
            }
          ],
          "title": "TreeSelect ",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/tree-select",
            "title": "Tree-select"
          }
        },
        "title": "TreeSelect  - Ant Design Mobile"
      },
      {
        "path": "/zh/components/tree-select",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/tree-select/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/tree-select/index.zh.md",
          "updatedTime": 1648516636645,
          "slugs": [
            {
              "depth": 1,
              "value": "TreeSelect 级联选择器 ",
              "heading": "treeselect-级联选择器"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "TreeSelect",
              "heading": "treeselect"
            }
          ],
          "title": "TreeSelect 级联选择器 ",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/tree-select",
            "title": "Tree-select"
          }
        },
        "title": "TreeSelect 级联选择器  - Ant Design Mobile"
      },
      {
        "path": "/components/virtual-input",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/virtual-input/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/virtual-input/index.en.md",
          "updatedTime": 1648516636647,
          "componentName": "virtual-input",
          "slugs": [
            {
              "depth": 1,
              "value": "VirtualInput ",
              "heading": "virtualinput"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "VirtualInput ",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/virtual-input",
            "title": "Virtual-input"
          }
        },
        "title": "VirtualInput  - Ant Design Mobile"
      },
      {
        "path": "/zh/components/virtual-input",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/virtual-input/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/virtual-input/index.zh.md",
          "updatedTime": 1648516636648,
          "componentName": "virtual-input",
          "slugs": [
            {
              "depth": 1,
              "value": "VirtualInput 虚拟输入框 ",
              "heading": "virtualinput-虚拟输入框"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "Ref",
              "heading": "ref"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "VirtualInput 虚拟输入框 ",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/virtual-input",
            "title": "Virtual-input"
          }
        },
        "title": "VirtualInput 虚拟输入框  - Ant Design Mobile"
      },
      {
        "path": "/components/water-mark",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/water-mark/index.en.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/water-mark/index.en.md",
          "updatedTime": 1648516636651,
          "slugs": [
            {
              "depth": 1,
              "value": "WaterMark",
              "heading": "watermark"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "CSS Variables",
              "heading": "css-variables"
            }
          ],
          "title": "WaterMark",
          "hasPreviewer": true,
          "locale": "en",
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "group": {
            "path": "/components/water-mark",
            "title": "Water-mark"
          }
        },
        "title": "WaterMark - Ant Design Mobile"
      },
      {
        "path": "/zh/components/water-mark",
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/src/components/water-mark/index.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/water-mark/index.zh.md",
          "updatedTime": 1648516636651,
          "slugs": [
            {
              "depth": 1,
              "value": "WaterMark 水印",
              "heading": "watermark-水印"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 3,
              "value": "CSS 变量",
              "heading": "css-变量"
            }
          ],
          "title": "WaterMark 水印",
          "hasPreviewer": true,
          "locale": "zh",
          "nav": {
            "path": "/zh/components",
            "title": "Components"
          },
          "group": {
            "path": "/zh/components/water-mark",
            "title": "Water-mark"
          }
        },
        "title": "WaterMark 水印 - Ant Design Mobile"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/button"
      },
      {
        "path": "/zh/components",
        "meta": {},
        "exact": true,
        "redirect": "/zh/components/button"
      },
      {
        "path": "/guide",
        "meta": {},
        "exact": true,
        "redirect": "/guide/quick-start"
      },
      {
        "path": "/zh/guide",
        "meta": {},
        "exact": true,
        "redirect": "/zh/guide/quick-start"
      },
      {
        "path": "/components/calendar",
        "meta": {},
        "exact": true,
        "redirect": "/components/calendar/calendar"
      },
      {
        "path": "/zh/components/calendar",
        "meta": {},
        "exact": true,
        "redirect": "/zh/components/calendar/calendar"
      },
      {
        "path": "/components/skeleton",
        "meta": {},
        "exact": true,
        "redirect": "/components/skeleton/skeleton"
      },
      {
        "path": "/zh/components/skeleton",
        "meta": {},
        "exact": true,
        "redirect": "/zh/components/skeleton/skeleton"
      },
      {
        "component": require('/Users/huzanlai/Documents/GitHub/adw-design/docs/404.en.md').default
      }
    ],
    "title": "Ant Design Mobile",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
