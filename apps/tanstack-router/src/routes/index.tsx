import { RootRoute, Router } from '@tanstack/react-router';
import { App } from '../App';
import { aboutRoute } from './about';
import { homeRoute } from './home';

export const rootRoute = new RootRoute({
  component: () => <App />,
  errorComponent: ({ error, info }) => (
    <div>
      <p>error</p>
      <p>{error.message}</p>
      <p>{info.componentStack}</p>
    </div>
  ),
  pendingComponent: () => <div>pending</div>,

  // meta: { asdf: 'zz' },
  // postSearchFilters: undefined,
  // preSearchFilters: undefined,
  // test: undefined,
  // wrapInSuspense: undefined,

  // getContext: (ctx) => {
  //   console.log('getContext:', ctx);
  //   return ctx;
  // },
  // validateSearch: (params) => {
  //   return JSON.stringify(params);
  // },

  // beforeLoad: ({ match, router }) => {
  //   console.log('beforeLoad:', match, router);
  // },
  // onBeforeLoadError: (e) => {
  //   console.log('onBeforeLoadError:', e);
  // },
  // onError: (e) => {
  //   console.log('onError:', e);
  // },
  // onLoaded: (ctx) => {
  //   console.log('onLoaded:', ctx);
  // },
  // onLoad: (ctx) => {
  //   console.log('onLoad:', ctx);
  // },
  // onLoadError: (e) => {
  //   console.log('onLoadError:', e);
  // },
  // onTransition: (ctx) => {
  //   console.log('onTransition:', ctx);
  // },
  // onValidateSearchError: (e) => {
  //   console.log('onValidateSearchError:', e);
  // },
});

export const router = new Router({
  basepath: '/app',
  routeTree: rootRoute.addChildren([homeRoute, aboutRoute]),
});
