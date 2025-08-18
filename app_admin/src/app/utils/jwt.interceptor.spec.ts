import { TestBed } from '@angular/core/testing';
import { JwtInterceptor } from './jwt.interceptor';
import { AuthenticationService } from '../services/authentication.service';
import { HttpRequest, HttpHandler } from '@angular/common/http';

describe('JwtInterceptor', () => {
  let interceptor: JwtInterceptor;
  let authService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService
      ]
    });
    authService = TestBed.inject(AuthenticationService);
    interceptor = new JwtInterceptor(authService);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should implement intercept method', () => {
    const req = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: (request: HttpRequest<any>) => {
        return {} as any; // mock response
      }
    };
    expect(interceptor.intercept(req, next)).toBeDefined();
  });
});