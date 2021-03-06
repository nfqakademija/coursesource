<?php
/**
 * Created by PhpStorm.
 * User: grantas
 * Date: 18.4.16
 * Time: 15.48
 */

namespace App\Form;

use App\Entity\Assignment;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AssignmentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('course')
            ->add(
                'deadline_date',
                DateTimeType::class,
                array(
                'widget' => 'single_text')
            )
            ->add('is_gradeable', CheckboxType::class)
            ->add('is_submittable', CheckboxType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            array(
            'data_class' => Assignment::class,
            'csrf_protection' => false
            )
        );
    }
}
