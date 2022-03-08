from django.db.models import fields
from rest_framework import serializers
from .models import *

#----------------------------- TABLES ------------------------------

class ClubsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Clubs
		fields =['name','number_trophies','foudation','avg_age','money','photo','league','cid']

class ContractsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Contracts
		fields = '__all__'

class NationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Nations
		fields = ['name','number_trophies','ranking','photo']

#----------------------------- VIEWS ------------------------------

class view_PlayersToBuySerializer(serializers.ModelSerializer):
	class Meta:
		model = view_PlayersToBuy
		fields =['name','surname','position','value','salary','club','nation','age','heigth','foot','avg_rate','goals','assists','matches','id']

class view_freePlayersSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_freePlayers
		fields =['name','surname','position','value','salary','nation','age','heigth','foot','avg_rate','goals','assists','matches','id']

class view_TrainersToBuySerializer(serializers.ModelSerializer):
	class Meta:
		model = view_TrainersToBuy
		fields =['name','surname','value','salary','club','nation','age','id']

class view_freeTrainersSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_freeTrainers
		fields =['name','surname','value','salary','nation','age','id']

class view_player_infoSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_player_info
		fields =['name','surname','position','value','salary','club','nation','age','heigth','foot','avg_rate','goals','assists','matches','photo','id']
		
class view_free_player_infoSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_free_player_info
		fields =['name','surname','position','value','salary','nation','age','heigth','foot','avg_rate','goals','assists','matches','photo','id']

class view_trainer_infoSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_trainer_info
		fields =['name','surname','value','salary','club','nation','age','photo','id']

class view_free_trainer_infoSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_free_trainer_info
		fields =['name','surname','value','salary','nation','age','photo','id']

class view_club_infoSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_club_info
		fields =['club','number_trophies','foudation','avg_age','photo','money','league','name','surname']

class view_clubs_trophies_listSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_clubs_trophies_list
		fields = ['trophy','year','club']

class view_nations_trophies_listSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_nations_trophies_list
		fields = ['trophy','year','nation']

class view_player_contracts_listSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_player_contracts_list
		fields = ['name','surname','club','salary','va1ue']

class view_trainer_contracts_listSerializer(serializers.ModelSerializer):
	class Meta:
		model = view_trainer_contracts_list
		fields = ['name','surname','club','salary','va1ue']
