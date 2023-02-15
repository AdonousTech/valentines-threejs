import { Color, ShaderMaterial, Vector3 } from "three";

export class DiamondMaterial {

    static uniforms = {
        time: { value: 0.0 },
        color: { value: new Color(0xffffff) },
        viewPosition: { value: new Vector3() },
        texture: { value: null }
      };
    
      static fragmentShader = document.getElementById('diamondShader').textContent;
    
      createMaterial() {
        return new ShaderMaterial({
          uniforms: DiamondMaterial.uniforms,
          fragmentShader: DiamondMaterial.fragmentShader,
          transparent: true
        });
      }

}