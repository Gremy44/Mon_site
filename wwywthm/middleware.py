# middleware.py
from django.http import JsonResponse
from django.http import HttpResponseForbidden

class APIKeyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # Remplacez 'votre-cle-api-ici' par votre clé API secrète
        self.api_key = 'COUCOU LA'

    def __call__(self, request):
        # Vérifier que la méthode de la requête est POST
        if request.method == 'POST':
            # Récupérer la clé API de l'en-tête de la requête
            provided_api_key = request.headers.get('COUCOU LA')

            # Vérifier si la clé API fournie correspond à la clé API attendue
            if provided_api_key != self.api_key:
                return HttpResponseForbidden("Accès refusé. Clé API invalide.")
        
        # Passez à la prochaine étape de la requête
        return self.get_response(request)