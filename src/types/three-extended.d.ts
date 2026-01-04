/**
 * Type definitions for Three.js extended geometries
 */

declare module 'three/addons/geometries/RoundedBoxGeometry.js' {
  import { BufferGeometry } from 'three';

  export class RoundedBoxGeometry extends BufferGeometry {
    constructor(
      width?: number,
      height?: number,
      depth?: number,
      segments?: number,
      radius?: number
    );
  }
}
