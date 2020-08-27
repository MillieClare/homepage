import React from 'react';
import Cv from './cv';
import Work from './work';
import Skills from './skills'

export default function Resume() {
  return (
    <section id="resume">
      <Cv />

      <Work />

      <Skills />
    </section>
  );
}