import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroments';

const base_url = enviroment.bas_url;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {


  constructor() { }

  async updateImage(
    file: File,
    type: 'usuarios' | 'medicos' | 'hospitales',
    id: string | undefined
    ) {
      try {
      const url = `${base_url}/upload/${type}/${id}`;
      const formData = new FormData();
      formData.append('imagen', file);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ""
        },
        body: formData
      })

      const data = await resp.json();

      } catch (error) {
        console.error(error)
      }
  }

}
