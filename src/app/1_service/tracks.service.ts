import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Track } from './track';

@Injectable()
export class TrackService {
  constructor(private http: HttpClient) {}

  getTracksAndFilterByArtist(artist: string): Observable<Track[]> {
    return this.http
      .get('/api/tracks')
      .pipe(map((tracks: Track[]) => tracks.filter(t => t.artist === artist)));
  }
}
