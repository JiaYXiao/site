import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
  
  export const animation1 = animation([
    style({
      height: '{{ height }}',
      opacity: '{{ opacity }}',
      backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
  ]);

  export const animation2 = animation ([
    style({transform: 'translateX(0)', opacity: 1}),
    animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
  ]);