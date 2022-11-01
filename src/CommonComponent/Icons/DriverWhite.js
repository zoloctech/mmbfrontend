import * as React from 'react';

function SvgDriverWhite(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={79} height={79} {...props}>
      <defs>
        <style>{'.driver_white_svg__b{fill:#fb0}'}</style>
      </defs>
      <g stroke='#fb0' strokeWidth={1.5} fill='none'>
        <circle cx={39.5} cy={39.5} r={39.5} stroke='none' />
        <circle cx={39.5} cy={39.5} r={38.75} />
      </g>
      <path
        className='driver_white_svg__b'
        d='M28.14 32.495h22.311a4.142 4.142 0 001.438-3C51.89 25.641 45.769 22 39.296 22s-12.594 3.641-12.594 7.493a4.142 4.142 0 001.438 3.002zm7.134-5.83a1.049 1.049 0 011.455-.291l2.566 1.711 2.567-1.711a1.05 1.05 0 111.164 1.746l-3.148 2.1a1.049 1.049 0 01-1.164 0l-3.148-2.1a1.049 1.049 0 01-.291-1.455zM31.093 34.594c.762 2.419 4.076 4.2 8.2 4.2s7.441-1.778 8.2-4.2zM35.504 57.824h7.583l1.965-5.9a6.259 6.259 0 01-11.532-.055zM30.494 49.427h-.643a7.355 7.355 0 00-7.347 7.346 1.049 1.049 0 001.049 1.049h9.739zM48.741 49.427h-.647l-2.8 8.4h9.739a1.049 1.049 0 001.049-1.049 7.351 7.351 0 00-7.341-7.351z'
      />
      <path
        className='driver_white_svg__b'
        d='M39.3 40.891a12.347 12.347 0 01-8.4-2.863v3a8.415 8.415 0 004.2 7.245v1.151a4.2 4.2 0 108.4 0v-1.151a8.416 8.416 0 004.2-7.245v-3a12.347 12.347 0 01-8.4 2.863zm3.958 3.638a4.2 4.2 0 01-7.916 0 1.05 1.05 0 111.978-.7 2.1 2.1 0 003.96 0 1.05 1.05 0 111.978.7z'
      />
    </svg>
  );
}

export default SvgDriverWhite;