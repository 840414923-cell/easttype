import json

with open('src/lib/herbs-data.json', 'r', encoding='utf-8') as f:
    herbs = json.load(f)

for herb in herbs:
    cat = herb['category']
    temp = herb['temperature']
    channels = herb['channels']
    taste = herb['taste']
    name = herb['nameEn']
    
    focus_map = {
        'Qi Tonic': ['Energy Support', 'Digestive Health', 'Immune Support'],
        'Blood Tonic': ['Women Health', 'Circulation', 'Complexion'],
        'Yin Tonic': ['Sleep Support', 'Dry Skin Relief', 'Heat Relief'],
        'Yang Tonic': ['Cold Sensitivity', 'Lower Back Support', 'Vitality'],
        'Warming Herb': ['Digestive Warmth', 'Cold Relief', 'Circulation'],
        'Cooling Herb': ['Heat Relief', 'Skin Health', 'Throat Relief'],
        'Dampness Draining': ['Water Retention', 'Weight Management', 'Digestion'],
        'Qi Regulating': ['Stress Relief', 'Mood Balance', 'Digestive Comfort'],
        'Calming Herb': ['Sleep Support', 'Anxiety Relief', 'Mental Clarity'],
    }
    herb['therapeuticFocus'] = focus_map.get(cat, ['General Wellness'])
    
    details = []
    for action in herb['actions']:
        exp = 'In Chinese medicine, this action relates to the herb ' + name + ' and its ' + temp.lower() + ' nature with affinity for the ' + channels + ' channels. ' + action + ' means this herb may help regulate functions associated with these organ systems. The ' + taste.lower() + ' taste contributes to this effect by directing the herb influence in specific ways according to TCM pharmacology principles developed over thousands of years of clinical observation.'
        details.append({'action': action, 'explanation': exp})
    herb['actionDetails'] = details
    
    type_names = {
        'qi_deficient': 'Qi Deficient types with chronic fatigue',
        'yang_deficient': 'Yang Deficient types who run cold',
        'yin_deficient': 'Yin Deficient types with heat signs',
        'phlegm_damp': 'Phlegm Damp types with heaviness',
        'damp_heat': 'Damp Heat types with skin issues',
        'blood_stasis': 'Blood Stasis types with poor circulation',
        'qi_stagnant': 'Qi Stagnant types with stress',
    }
    conditions = []
    for bt in herb['bodyTypes']:
        if bt in type_names:
            conditions.append({
                'condition': type_names[bt],
                'tcmInterpretation': 'In TCM theory, ' + name + ' addresses imbalances in the ' + channels + ' by leveraging its ' + temp.lower() + ' and ' + taste.lower() + ' properties. This herb may help restore balance to the organ systems involved. Chinese medicine views the body as an interconnected system, so supporting one channel often benefits related organs.',
                'whyItHelps': name + ' enters the ' + channels + ' channels. Its ' + temp.lower() + ' temperature and ' + taste.lower() + ' taste make it suited for patterns where these organs need support. The herb works gradually to restore functional balance rather than forcing immediate change. Consistent use over weeks allows the body to adjust naturally.'
            })
    herb['commonlyUsedFor'] = conditions
    
    if 'Cold' in temp:
        herb['preparationNotes'] = 'Because ' + name + ' is ' + temp.lower() + ', it should be used cautiously in people who already run cold. For warming preparations, simmer longer to moderate its cooling effect. For tea, steep 5-10 minutes in hot water. Store in a cool, dry place away from direct sunlight.'
    elif 'Warm' in temp or 'Hot' in temp:
        herb['preparationNotes'] = 'Because ' + name + ' is ' + temp.lower() + ', use cautiously in people who run hot. For tea, steep 5-10 minutes. For soup, simmer 30-60 minutes. Avoid overcooking as prolonged heat may reduce active compounds. Store in an airtight container in a cool, dry place.'
    else:
        herb['preparationNotes'] = name + ' is ' + temp.lower() + ' in nature, making it balanced for most constitutions. For tea, steep 5-10 minutes. For soup, simmer 30-60 minutes. Store in an airtight container in a cool, dry place for up to 12 months.'
    
    if 'Warm' in temp or 'Hot' in temp:
        herb['dietaryAdvice'] = 'When taking ' + name + ', avoid cold and raw foods that counteract its warming effect. Limit iced drinks and excessive fruit. Warm, cooked meals complement this herb best. If you experience dry mouth or restlessness, reduce the dose or add cooling foods like pear or mung beans to balance the warming effect.'
    elif 'Cold' in temp or 'Cool' in temp:
        herb['dietaryAdvice'] = 'When taking ' + name + ', avoid very spicy foods that compound its cooling effect. Warm, cooked meals are preferred. If you experience loose stools or chilliness, reduce the dose or add warming foods like ginger tea. Do not take on an empty stomach to avoid digestive discomfort.'
    else:
        herb['dietaryAdvice'] = name + ' is neutral in temperature and can be taken with most foods. Warm, cooked meals are generally recommended in Chinese medicine. Avoid taking any herb with very cold or icy drinks. Consistent timing (same time each day) helps the body adapt to the herb effects.'

with open('src/lib/herbs-data.json', 'w', encoding='utf-8') as f:
    json.dump(herbs, f, ensure_ascii=False, indent=2)

print('Expanded ' + str(len(herbs)) + ' herbs with detailed content')
