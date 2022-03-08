from django.http import request
from django.http.response import JsonResponse
from django.shortcuts import render,redirect
from manager.models import *
from .serializers import *
from django.db.models import Q

from rest_framework.decorators import api_view
from rest_framework.response import Response



@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        '----------------------1':'1----------------------',
        '----------------------2':'2----------------------',
        '----------------------3':'3----------------------', 
        '----------------------4':'4----------------------'
		}
    return Response(api_urls)

#----------------------------- CLUBS ------------------------------

@api_view(['GET'])
def clubList(request):
    clubs = Clubs.objects.all()
    serializer = ClubsSerializer(clubs,many = True) 
    return Response(serializer.data)

@api_view(['GET'])
def clubInfo(request,chosenClub):
    club = view_club_info.objects.get(cid=chosenClub)
    serializer = view_club_infoSerializer(club,many = False) 
    return Response(serializer.data)

@api_view(['GET'])
def clubTrophies(request,chosenClub):
    trophies = view_clubs_trophies_list.objects.filter(cid=chosenClub)
    serializer = view_clubs_trophies_listSerializer(trophies,many = True) 
    return Response(serializer.data)

@api_view(['GET'])
def allClubTrophies(request):
    trophies = view_clubs_trophies_list.objects.all()
    serializer = view_clubs_trophies_listSerializer(trophies,many = True) 
    return Response(serializer.data)
#----------------------------- PLAYERS ------------------------------

@api_view(['GET'])
def playersToBuy(request,club):
    players = view_PlayersToBuy.objects.filter(~Q(cid = club))
    serializer = view_PlayersToBuySerializer(players,many = True) 
    return Response(serializer.data)

@api_view(['GET'])
def freePlayers(request):
    players = view_freePlayers.objects.all()
    serializer = view_freePlayersSerializer(players,many = True) 
    return Response(serializer.data)

@api_view(['POST'])
def insertPlayer(request,club,chosenPlayer):
    dict = {"salary" :  request.data.get("salary"),"pid" : chosenPlayer ,"cid":club}
    serializer = ContractsSerializer(data = dict,many=False)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def updatePlayer(request, club,chosenPlayer):
    contract = Contracts.objects.get(pid = chosenPlayer)
    dict = {"salary" :  request.data.get("salary"),"va1ue" :  request.data.get("va1ue"),"pid" : chosenPlayer ,"cid":club}
    serializer = ContractsSerializer(instance = contract, data = dict,many=False)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deletePlayer(request, club,chosenPlayer):
    contract = Contracts.objects.get(pid = chosenPlayer)
    contract.delete()
    return Response('PLAYER DELETED')

@api_view(['GET'])
def playerInfo(request,chosenPlayer):
    player = view_player_info.objects.get(pid=chosenPlayer)
    serializer = view_player_infoSerializer(player,many = False) 
    return Response(serializer.data)

@api_view(['GET'])
def freePlayerInfo(request,chosenPlayer):
    player = view_free_player_info.objects.get(pid=chosenPlayer)
    serializer = view_free_player_infoSerializer(player,many = False) 
    return Response(serializer.data)

@api_view(['GET'])
def playersInClub(request,club):
    players = view_player_info.objects.filter(cid = club)
    serializer = view_player_infoSerializer(players,many = True) 
    return Response(serializer.data)

#----------------------------- TRAINERS ------------------------------

@api_view(['GET'])
def trainersToBuy(request,club):
    trainers = view_TrainersToBuy.objects.filter(~Q(cid = club))
    serializer = view_TrainersToBuySerializer(trainers,many = True) 
    return Response(serializer.data)

@api_view(['GET'])
def freeTrainers(request):
    trainers = view_freeTrainers.objects.all()
    serializer = view_freeTrainersSerializer(trainers,many = True) 
    return Response(serializer.data)

@api_view(['POST'])
def insertTrainer (request,club,chosenTrainer):
    dict = {"salary" :  request.data.get("salary"),"tid" : chosenTrainer ,"cid":club}
    serializer = ContractsSerializer(data = dict,many=False)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def updateTrainer(request, club,chosenTrainer):
    contract = Contracts.objects.get(tid = chosenTrainer)
    dict = {"salary" :  request.data.get("salary"),"va1ue" :  request.data.get("va1ue"),"tid" : chosenTrainer ,"cid":club}
    serializer = ContractsSerializer(instance = contract, data = dict,many=False)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteTrainer(request, club,chosenTrainer):
    contract = Contracts.objects.get(tid = chosenTrainer)
    contract.delete()
    return Response('TRAINER DELETED')

@api_view(['GET'])
def trainerInfo(request,chosenTrainer):
    trainer = view_trainer_info.objects.get(tid=chosenTrainer)
    serializer = view_trainer_infoSerializer(trainer,many = False) 
    return Response(serializer.data)

@api_view(['GET'])
def freeTrainerInfo(request,chosenTrainer):
    trainer = view_free_trainer_info.objects.get(tid=chosenTrainer)
    serializer = view_free_trainer_infoSerializer(trainer,many = False) 
    return Response(serializer.data)

@api_view(['GET'])
def trainerInClub(request,club):
    trainer = view_trainer_info.objects.filter(cid = club)
    serializer = view_trainer_infoSerializer(trainer,many = True) 
    return Response(serializer.data)

#----------------------------- CONTRACTS ------------------------------
@api_view(['GET'])
def playersContracts(request,club):
    contracts = view_player_contracts_list.objects.filter(cid=club)
    serializer = view_player_contracts_listSerializer(contracts,many = True) 
    return Response(serializer.data)

@api_view(['GET'])
def trainerContract(request,club):
    contracts = view_trainer_contracts_list.objects.filter(cid=club)
    serializer = view_trainer_contracts_listSerializer(contracts,many = True) 
    return Response(serializer.data)
#----------------------------- NATIONS ------------------------------
@api_view(['GET'])
def nationInfo(request,chosenNation):
    nation = Nations.objects.get(nid=chosenNation)
    serializer = NationSerializer(nation,many = False) 
    return Response(serializer.data)

@api_view(['GET'])
def nationTrophies(request,chosenNation):
    trophies = view_nations_trophies_list.objects.filter(nid=chosenNation)
    serializer = view_nations_trophies_listSerializer(trophies,many = True) 
    return Response(serializer.data)

@api_view(['GET'])
def allNationTrophies(request):
    trophies = view_nations_trophies_list.objects.all()
    serializer = view_nations_trophies_listSerializer(trophies,many = True) 
    return Response(serializer.data)